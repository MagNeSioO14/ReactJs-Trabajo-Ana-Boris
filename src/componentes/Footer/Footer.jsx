import { Medios } from "./Medios/Medios";
import { Pagos } from "./Pagos/Pagos";
import './Footer.scss';


const Footer = () => {

    return (
        <div className="divFooter">
            <Medios/>
            <Pagos/>
        </div>
    )
}

export default Footer