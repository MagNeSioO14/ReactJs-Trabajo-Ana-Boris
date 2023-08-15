import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from "firebase/firestore"
import { useContext, useState } from "react"
import { db } from "../../firebase/config"
import { CartContext } from "../../context/CartContext"
import { Link, Navigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import './Checkout.scss'

const schema = Yup.object().shape({
    nombre: Yup.string()
            .min(4, "El nombre es muy corto")
            .max(20, "Maximo 20 Caracteres")
            .required("Este campo es Obligatorio"),
    direccion: Yup.string()
            .min(8, "La direccion es muy corta")
            .max(40, "Maximo 40 Caracteres")
            .required("Este campo es Obligatorio"),
    email: Yup.string()
            .min(4, "El nombre es muy corto")
            .max(20, "Maximo 40 Caracteres")
            .required("Este campo es Obligatorio")
            .email("Ingresa un correo electrónico válido")
            .lowercase(),
    confirmarEmail: Yup.string()
            .email("Ingresa un correo electrónico válido")
            .required("Este campo es Obligatorio")
            .oneOf([Yup.ref('email'),null], "Los correos electrónicos deben coincidir" )
            .lowercase()

})


const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (values) => {
        setLoading(true)

        const orden = {
            cliente: values,
            items: cart.map(item => ({ id: item.id, precio: item.precio, cantidad: item.cantidad, nombre: item.titulo, imagen: item.imagen })),
            total: totalCompra(),
            fyh: new Date()
        }

        const batch = writeBatch(db)
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))
        const sinStock = []
        const orderRef = collection(db, "ordenes")

        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id)
            const stock = doc.data().stock

            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                sinStock.push(item)
            }
        })

        if (sinStock.length === 0) {
            await batch.commit()
            const doc = await addDoc(orderRef, orden)
            vaciarCarrito();
            setOrderId(doc.id)
        } else {
            alert("Sin stock")
        }
        setLoading(false)
    }

    if (orderId) {
        return (
            <div className="container checkOutDiv">
                <h2>Tu compra se registro con exito</h2>
                <hr />
                <span className="pCompra"> Tu numero de orden es: <strong>{orderId} </strong></span>
                <br />
                <Link className="btn mt-3 btnStyle" to="/">Volver</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container checkOutDiv" >
            <h2>checkout</h2>
            <hr />

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: '',
                    confirmarEmail: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {() => (
                    <Form>
                        <ErrorMessage className="errorStyle" name="nombre" component="p"/>
                        <Field className="form-control my-3" type="text" name="nombre"  placeholder="Nombre"/>

                        <ErrorMessage className="errorStyle" name="direccion" component="p"/>
                        <Field className="form-control my-3" type="text" name="direccion" placeholder="Direccion"/>

                        <ErrorMessage className="errorStyle" name="email" component="p"/>
                        <Field className="form-control my-3" type="email" name="email" placeholder="Email"/>

                        <ErrorMessage className="errorStyle" name="confirmarEmail" component="p"/>
                        <Field className="form-control my-3" type="email" name="confirmarEmail" placeholder="Confirmar Email"/>

                        <button disabled={loading} className="btn mb-3 btnStyle" type="submit">confirmar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Checkout
