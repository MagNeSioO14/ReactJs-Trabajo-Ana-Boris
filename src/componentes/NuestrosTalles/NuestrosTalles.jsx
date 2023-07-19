import Talles from "../../assets/Tabla de talles.jpeg";
import './NuestrosTalles.scss'

export const NuestrosTalles = () => {

    return(
        <main>
            <div className="talles">

                <p>A continuacion dispondras de una tabla, para que puedas medirte y
                    <br/>
                   asi poder elegir la medida que te corresponde según nuestros talles.
                </p>
                <h1>Tabla de talles</h1>
                <img src={Talles} alt="tabla de talles"/>
            </div>

        </main>
    )
}