import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import './CartView.scss'


const CartView = () => {
    const { cart, totalCompra, vaciarCarrito, removerItem } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container-fluid outOfProduct">
                <h2>No tienes productos agregados al carrito</h2>
                <hr />
                <Link to="/" className="btn btnStyls" >Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div className="container-fluid cartViewDiv">
            <h2>Tu compra</h2>
            <hr />
            <div className="cartViewOrder">
                <div className="productOrder">
                {
                    cart.map((item) => (
                        <div className="articuloCart" key={item.id}>
                            <div className="imgDiv">
                                <img src={item.imagen} alt={item.titulo} />
                            </div>
                            <div className="descrptionDiv">
                                <h3>{item.titulo}</h3>
                                <p>Precio: ${item.precio * item.cantidad}</p>
                                <p>Cantidad: {item.cantidad}</p>
                                <button onClick={() => removerItem(item.id)} className="btn btnStyls">Eliminar</button>
                            </div>
                            <hr />
                        </div>
                    ))
                }
                </div>

                <div className="totalCompra">
                    <h4>Total: ${totalCompra()}</h4>
                    <button className="btn m-2 btnStyls" onClick={vaciarCarrito} >Vaciar Carrito</button>
                    <Link className="btn m-2 btnStyls" to="/checkout">Terminar mi compra</Link>
                </div>
            </div>

        </div>
    )
}

export default CartView