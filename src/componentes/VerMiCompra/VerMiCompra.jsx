import { useState } from 'react'
import './VerMiCompra.scss'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { Formik, Form, Field } from 'formik';
import { Link } from "react-router-dom";

const VerMiCompra = () => {
    const [prodEncontrado, setProdEncontrado] = useState([]);
    const [ordenEncontrada, setOrdenEncontrada] = useState(false);

    const handleProducto = async ({ codProd }) => {
        try {
            const compraRef = doc(db, 'ordenes', codProd)
            const compraSnapshot = await getDoc(compraRef)

            if (compraSnapshot != null) {
                const compraData = compraSnapshot.data()
                const items = compraData.items;
                setProdEncontrado(items)
                setOrdenEncontrada(true)
            } else {
                console.log('prod no encontrado');
                setProdEncontrado(null)
                setOrdenEncontrada(false)
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="compraEstilos" >
            <h1>Ver tu compra</h1>
            <h2>Total: $ {prodEncontrado.reduce((acc, item) => acc + item.precio * item.cantidad, 0)}</h2>

            {!ordenEncontrada ? <Formik
                initialValues={{
                    codProd: ''
                }}
                onSubmit={handleProducto}
            >
                <Form className='comprarDiv'>
                    <Field type="text" name='codProd' placeholder="Codigo de compra" />
                    <button className="m-3" type='submit'>Ver compra</button>
                </Form>
            </Formik>
                :
                prodEncontrado.map((item) => (
                    <>
                    <div className="articuloCart" key={item.id}>
                        <div className="imgDiv">
                            <img src={item.imagen} alt={item.titulo} />
                        </div>
                        <div className="descrptionDiv">
                            <h3>{item.titulo}</h3>
                            <p>Precio: ${item.precio * item.cantidad}</p>
                            <p>Cantidad: {item.cantidad}</p>
                        </div>
                        <hr />
                    </div>
                    <Link className='btnVolver' to="/" >Volver a la tienda</Link>
                    </>
                ))
            }
        </div>
    )
}

export default VerMiCompra