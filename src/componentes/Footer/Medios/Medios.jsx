import { Link } from "react-router-dom";
import LogoInsta from "../../../Assets/instLogo.png";
import LogoFace from "../../../Assets/facelogo.png";

export const Medios = () => {

    return (
        <div class="mediosOrden contacOrden">
            <ul>
                <h4 class="hFooterEstilos">Navegacion</h4>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/catalogo">Catalogo</Link></li>
                <li><Link to="/quienessomos">Quienes somos?</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/talles">Nuestros talles</Link></li>
            </ul>

            <ul>
                <h4 class="hFooterEstilos">Contactanos</h4>

                <Link to="https://www.instagram.com/zeuz_rw/" target="_blank">
                    <img src={LogoInsta} alt="Instagram" class="logoRedes"/>
                </Link>
                <Link to="https://www.facebook.com/zeuzrw" target="_blank">
                    <img src={LogoFace} alt="Facebook" class="logoRedes"/>
                </Link>
            </ul>

        </div>
    )
}