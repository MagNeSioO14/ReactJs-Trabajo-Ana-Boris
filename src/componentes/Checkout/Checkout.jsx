import { addDoc, collection } from "firebase/firestore"
import { useContext, useState } from "react"
import { db } from "../../firebase/config"

const Checkout = () => {
    const [values, setValues] = useState ({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit")

        const orden = {
            cliente: values,
            items: 'cart.map(item => ({id: item.id, precio: item.precio, cantidad: item.cantidad, nombre: item.nombre}))',
            total: 'totalCompra()',
            fyh: new Date()
        }

        //enviarlo a firebase
        const orderRef = collection(db, "orders")

        addDoc(orderRef, orden)
            .then((doc) => {
                console.log(doc.id);
            })
    }

    return (
        <div>
            <h2>checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    value={values.nombre}
                    type="text"
                    className="form-control my-2"
                    placeholder="Nombre"
                    name="nombre"
                />

                <input
                    onChange={handleInputChange}
                    value={values.direccion}
                    type="text"
                    className="form-control my-2"
                    placeholder="Direccion"
                    name="direccion"
                />

                <input
                    onChange={handleInputChange}
                    value={values.email}
                    type="email"
                    className="form-control my-2"
                    placeholder="Tu correo"
                    name="email"
                />
            </form>

            <button className="btn btn-success">confirmar</button>

        </div>
    )
}

export default Checkout