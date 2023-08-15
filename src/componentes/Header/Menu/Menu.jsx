import { Link } from "react-router-dom";
import { CartWidget } from "../../CartWidget/CartWidget";
import '../Header.scss'
import { useAuth } from "../../../context/AuthContext";

export const Menu = () => {
    const { isAdmin } = useAuth()

    return (
        <nav className="headerNav">
            <Link className="navLink" to="/">Home</Link>
            <Link className="navLink" to="/catalogo">Catalogo</Link>
            <Link className="navLink" to="/nosotros">Nosotros</Link>
            <Link className="navLink" to="/contacto">Contacto</Link>
            <Link className="navLink" to="/talles">Nuestros Talles</Link>
            <Link className="navLink" to="/vercompra">Ver Mi Compra</Link>

            {isAdmin && <Link className="navLink" to="/agregar">Agregar producto</Link>}
            <CartWidget/>
        </nav>
    )
}