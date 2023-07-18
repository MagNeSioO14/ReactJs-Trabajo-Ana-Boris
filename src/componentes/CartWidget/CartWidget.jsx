import LogoCart from '../../assets/CartLogo.png'
import './CartWidget.scss'

export const CartWidget = () => {

    return(
        <div className="divCart">
            <img className="imgCart" src={LogoCart} alt="Carrito" />
            <p>1</p>
        </div>
    )
}