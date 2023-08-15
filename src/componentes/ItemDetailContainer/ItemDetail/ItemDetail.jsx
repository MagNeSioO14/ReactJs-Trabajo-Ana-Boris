import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../../context/CartContext"
import { Link } from "react-router-dom"


const ItemDetail = ({ item }) => {
    const { agregarAlCarrito, estaAgregado } = useContext(CartContext)

    const [cantidad, setcantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }

    return (
        <div className="produCuerpo">
            <div className="produTamaño produOrden">
                <img src={item.imagen} alt={item.titulo} />
                <p className="descripcionP">{item.descripcion}</p>
            </div>

            <div className="produTamaño">
                <h3>{item.titulo}</h3>
                <p>Precio: ${item.precio}</p>
                <span><strong>10%</strong> de descuento pagando por transferencia bancaria</span>
                {
                    estaAgregado(item.id)
                        ? <Link className="btn mt-5 btnAgregar" to="/cartView"> Terminar mi Comprar </Link>
                        : <ItemCount
                            max={item.stock}
                            counter={cantidad}
                            setCounter={setcantidad}
                            agregar={handleAgregar}
                        />
                }
            </div>
        </div>
    )
}

export default ItemDetail