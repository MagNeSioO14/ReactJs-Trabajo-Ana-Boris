import { Link } from "react-router-dom";
import './NotFound.scss'


export const NotFound = () => {

    return (
        <div className="divErrorStyle">
            <h1>Error 404 <br></br> Not Found</h1>
            <div>
                <img src="../../../yamcha_error_NotFound.png" alt="" />
                <p>El link que esta intentando ver no existe o ha sido borrado</p>
            </div>
            <Link to="/" className="btn btnStyle" >Volver</Link>
        </div>
    )
}