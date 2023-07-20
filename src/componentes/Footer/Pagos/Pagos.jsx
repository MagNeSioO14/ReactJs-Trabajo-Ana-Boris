//import MasterCard from '../../../assets/logosTarjetas/mastercard.png';
//import Visa from '../../../assets/logosTarjetas/visa.png';
//import Naranja from '../../../assets/logosTarjetas/tarjeta-naranja.png';
//import MercadoPago from '../../../assets/logosTarjetas/mercadopago.png';
//import RapiPago from '../../../assets/logosTarjetas/rapipago.png';
//import Oca from "../../../assets/logosEnvios/Oca.png";

export const Pagos = () => {

    return (
        <ul className="mediosOrden">
            <div>
                <h3 className="hFooterEstilos">Medios de pago</h3>
                <img src="../../../logosTarjetas/mastercard.png" alt="mastercard" className="logoTarjetas"/>
                <img src="../../../logosTarjetas/visa.png" alt="visa" className="logoTarjetas" />
                <img src="../../../logosTarjetas/tarjeta-naranja.png" alt="Naranja" className="logoTarjetas" />
                <img src="../../../logosTarjetas/mercadopago.png" alt="marcadoPago" className="logoTarjetas" />
                <img src="../../../logosTarjetas/rapipago.png" alt="rapiPago" className="logoTarjetas" />
            </div>
            <div>
                <h3 className="hFooterEstilos">Formas de envio</h3>
                <img src="../../../logosEnvios/oca.png" alt="correoOca" className="logoTarjetas" />
            </div>
        </ul>
    )
}