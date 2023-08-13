import { Link } from 'react-router-dom'
import './CartWidget.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { AiOutlineShoppingCart } from "react-icons/ai";


export const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return(
        <Link to="/compra" className="linkCart">
            <AiOutlineShoppingCart color='black' size="3rem"/>
            <span>{totalCantidad()}</span>
        </Link>
    )
}