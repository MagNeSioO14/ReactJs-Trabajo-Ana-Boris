import MasterCard from '../../../assets/logosTarjetas/mastercard.png';
import Visa from '../../../assets/logosTarjetas/visa.png';
import Naranja from '../../../assets/logosTarjetas/tarjeta-naranja.png';
import MercadoPago from '../../../assets/logosTarjetas/mercadopago.png';
import RapiPago from '../../../assets/logosTarjetas/rapipago.png';
import Oca from "../../../assets/logosEnvios/Oca.png";

export const Pagos = () => {

    return (
        <ul className="mediosOrden">
            <div>
                <h3 className="hFooterEstilos">Medios de pago</h3>
                <img src={MasterCard} alt="mastercard" className="logoTarjetas"/>
                <img src={Visa} alt="visa" className="logoTarjetas" />
                <img src={Naranja} alt="Naranja" className="logoTarjetas" />
                <img src={MercadoPago} alt="marcadoPago" className="logoTarjetas" />
                <img src={RapiPago} alt="rapiPago" className="logoTarjetas" />
            </div>
            <div>
                <h3 className="hFooterEstilos">Formas de envio</h3>
                <img src={Oca} alt="correoOca" className="logoTarjetas" />
            </div>
        </ul>
    )
}