import MasterCard from '../../../assets/logosTarjetas/mastercard.png';
import Visa from '../../../assets/logosTarjetas/visa.png';
import Naranja from '../../../assets/logosTarjetas/tarjeta-naranja.png';
import MercadoPago from '../../../assets/logosTarjetas/mercadopago.png';
import RapiPago from '../../../assets/logosTarjetas/rapipago.png';
import Oca from "../../../assets/logosEnvios/Oca.png";

export const Pagos = () => {

    return (
        <ul class="mediosOrden">
            <div>
                <h3 class="hFooterEstilos">Medios de pago</h3>
                <img src={MasterCard} alt="mastercard" class="logoTarjetas"/>
                <img src={Visa} alt="visa" class="logoTarjetas" />
                <img src={Naranja} alt="Naranja" class="logoTarjetas" />
                <img src={MercadoPago} alt="marcadoPago" class="logoTarjetas" />
                <img src={RapiPago} alt="rapiPago" class="logoTarjetas" />
            </div>
            <div>
                <h3 class="hFooterEstilos">Formas de envio</h3>
                <img src={Oca} alt="correoOca" class="logoTarjetas" />
            </div>
        </ul>
    )
}