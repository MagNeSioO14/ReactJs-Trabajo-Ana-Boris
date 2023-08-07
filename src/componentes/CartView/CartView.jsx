import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const CartView = () => {
    const {cart, totalCompra, vaciarCarrito, removerItem} = useContext(CartContext)

    if (cart.length === 0) {
        return(
            <div>
                <h2>No tienes productos agregados al carrito</h2>
                <hr />
                <Link to="/" className="btn btn-success" >Ir a comprar</Link>
            </div>
        )
    }

    return(
        <div>
            <h2>Tu compra</h2>
            <hr />

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.titulo}</h3>
                        <img src={item.imagen} alt={item.titulo} />
                        <p>Precio: ${item.precio * item.cantidad}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <button onClick={() => removerItem(item.id)} className="btn">Eliminar</button>
                        <hr />
                    </div>
                ))
            }

            <div>
                <h4>Total: ${totalCompra()}</h4>
                <button className="bnt bnt-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>

        </div>
    )
}

export default CartView