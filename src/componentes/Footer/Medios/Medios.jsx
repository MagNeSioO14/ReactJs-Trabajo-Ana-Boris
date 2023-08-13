import { Link } from "react-router-dom";

export const Medios = () => {

    return (
        <div className="mediosOrden contacOrden">
            <ul>
                <h4 className="hFooterEstilos">Navegacion</h4>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/catalogo">Catalogo</Link></li>
                <li><Link to="/nosotros">Quienes somos?</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/talles">Nuestros talles</Link></li>
            </ul>

            <ul>
                <h4 className="hFooterEstilos">Contactanos</h4>

                <Link to="https://www.instagram.com/zeuz_rw/" target="_blank">
                    <img src="../../../instLogo.png" alt="Instagram" className="logoRedes"/>
                </Link>
                <Link to="https://www.facebook.com/zeuzrw" target="_blank">
                    <img src="../../../facelogo.png" alt="Facebook" className="logoRedes"/>
                </Link>
            </ul>

        </div>
    )
}