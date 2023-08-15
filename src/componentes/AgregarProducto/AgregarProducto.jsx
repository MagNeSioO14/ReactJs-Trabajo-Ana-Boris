import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import { db, subirArchivo } from "../../firebase/config"
import { addDoc, collection } from "firebase/firestore"
import './AgregarProducto.scss'
import { useState } from "react"
import Loader from "../Loader/Loader"

const schema = Yup.object().shape({



    titulo: Yup.string()
        .min(4, "El nombre es muy corto")
        .max(25, "Maximo 20 Caracteres")
        .required("Este campo es Obligatorio"),
    precio: Yup.number()
        .required("Este campo es Obligatorio")
        .positive('El precio debe ser un número positivo'),
    category: Yup.string()
        .required("Este campo es Obligatorio"),
    stock: Yup.number()
        .required("Este campo es Obligatorio")
        .positive('El stock debe ser un número positivo')
        .integer('El stock debe ser un número entero')
        .min(0, 'El stock no puede ser negativo'),
    descripcion: Yup.string()
        .required("Este campo es Obligatorio"),
    imagen: Yup.mixed()
        .required("Este campo es Obligatorio")
        .test('fileType', 'Solo se permiten imágenes', value => {
            if (!value) return true;
            return ['image/jpeg', 'image/png'].includes(value.type.toLowerCase());
        })
})


const AgregarProducto = () => {
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (values, { resetForm }) => {
        setLoading(true)
        const imgref = await subirArchivo(values.imagen)

        const orden = {
            ...values,
            imagen: imgref
        }
        const productosRef = collection(db, "productos")
        addDoc(productosRef, orden)
        setLoading(false)
        resetForm()
    }

    return (
        <div className="container divAgregar">
            <h2>Agregar Producto</h2>

            <Formik
                initialValues={{
                    category: '',
                    descripcion: '',
                    precio: '',
                    stock: '',
                    titulo: '',
                    imagen: null
                }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {({ values, setFieldValue }) => (
                    <Form className="formAgregar">

                        <div>
                            <label htmlFor="product-name">Nombre del producto</label>
                            <ErrorMessage className="errorStyle" name="titulo" component="p" />
                            <Field className="form-control my-2" type="text" name="titulo" placeholder="Nombre" />

                            <label htmlFor="precio">Precio</label>
                            <ErrorMessage className="errorStyle" name="precio" component="p" />
                            <Field className="form-control my-2" type="number" name="precio" placeholder="Precio" />

                            <label htmlFor="Stock">Stock</label>
                            <ErrorMessage className="errorStyle" name="stock" component="p" />
                            <Field className="form-control my-2" type="number" name="stock" placeholder="Stock" />

                            <label htmlFor="category">Categoria</label>
                            <ErrorMessage className="errorStyle" name="category" component="p" />
                            <Field className="form-control my-2" as="select" name="category" placeholder="Categoria">
                                <option></option>
                                <option value="remera" >Remera</option>
                                <option value="buzos">Buzos</option>
                                <option value="pantalones">Pantalones</option>
                                <option value="accesorios">Accesorios</option>
                                <option value="tazas">Tazas</option>
                            </Field>

                            <label htmlFor="description">Descripcion</label>
                            <ErrorMessage className="errorStyle" name="descripcion" component="p" />
                            <Field className="form-control my-2" type="text" name="descripcion" placeholder="Descripcion" />

                            <label htmlFor="imagen">Imagen</label>
                            <ErrorMessage className="errorStyle" name="imagen" component="p" />
                            <input className="form-control my-2" name="imagen" type="file" placeholder="Imagen" onChange={e => setFieldValue('imagen', e.currentTarget.files[0])} />
                        </div>

                        <button disabled={loading} className="btn btn-success" type="submit">confirmar</button>

                        {loading && <Loader />}


                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AgregarProducto
