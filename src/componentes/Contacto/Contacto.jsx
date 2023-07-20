import './Contacto.scss';
// import Face from "../../assets/contactoLogo/facelogo1.png";
// import Insta from "../../assets/contactoLogo/instagramlogo.png";
// import Mail from "../../assets/contactoLogo/mail-logo.png";
// import Ubicacion from "../../assets/contactoLogo/ubicacionlogo.png";

export const Contacto = () => {

    return (
        <main className="contacto">
            <div className="contactorder">
                <h1>Contactanos</h1>
                <p>Dejenos un mensaje a continuacion,
                    <br />
                    Responederemos lo mas rapido posible.
                </p>

                <div className="conDiv">
                    <ul>
                        <li>
                            <img src="../../contactoLogo/mail-logo.png" alt="Correo" height="20" width="20" />
                            <a href="mailto:Zeuz@hotmail.com">Zeuz@hotmail.com</a>
                        </li>
                        <li>
                            <img src="../../contactoLogo/ubicacionlogo.png" alt="Ubicacion" height="20" width="20" />
                            Ubicacion
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/zeuz_rw/" target="_blank">
                                <img src="../../contactoLogo/instagramlogo.png" alt="Instagram" width="20" height="20" />
                                Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/zeuzrw" target="_blank">
                                <img src="../../contactoLogo/facelogo1.png" alt="Facebook" width="20" height="20" />
                                facebook</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="contactorder formTamaño">
                <form className="formorden">
                    <label for="Nombre">Nombre</label>
                    <input type="text" placeholder="Ingrese su Nombre" id="Nombre" />
                    <label for="">Correo</label>
                    <input type="email" placeholder="Ingrese su Correo" />
                    <label for="">Telefono</label>
                    <input type="number" placeholder="Ingrese su Telefono" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Ingrese su mensaje"></textarea>

                    {/* <!-- Botones --> */}
                    <input type="submit" />
                    <input type="reset" />
                </form>
            </div>

        </main>
    )
}