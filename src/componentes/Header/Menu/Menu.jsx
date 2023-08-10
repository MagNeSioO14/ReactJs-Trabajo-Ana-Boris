import { Link } from "react-router-dom";
import { CartWidget } from "../../CartWidget/CartWidget";
import '../Header.scss'

export const Menu = () => {

    return (
        <nav className="headerNav">
            <Link className="navLink" to="/">Home</Link>
            <Link className="navLink" to="/catalogo">Catalogo</Link>
            <Link className="navLink" to="/nosotros">Nosotros</Link>
            <Link className="navLink" to="/contacto">Contacto</Link>
            <Link className="navLink" to="/talles">Nuestros Talles</Link>
            <CartWidget/>
        </nav>
    )
}