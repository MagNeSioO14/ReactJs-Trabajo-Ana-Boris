// import LogoCart from '../../assets/CartLogo.png'
import { Link } from 'react-router-dom'
import './CartWidget.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return(
        <Link to="/compra" className="linkCart">
            <img className="imgCart" src="../../CartLogo.png" alt="Carrito" />
            <span>{totalCantidad()}</span>
        </Link>
    )
}