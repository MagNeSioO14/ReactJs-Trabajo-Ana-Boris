import ItemsListContainer from "../ItemListContainer/ItemListContainer"
import './Catalogo.scss'
import { Link } from "react-router-dom";

const Catalogo = () => {


    return (
        <div className="cuerpoOrden">
            <div className="divCat"> 
                <h2>Categorias</h2>
                <ul>
                    <li><Link className="catLink" to="/catalogo/remera">Remeras</Link></li>
                    <li><Link className="catLink" to="/catalogo/buzos">Buzos</Link></li>
                    <li><Link className="catLink" to="/catalogo/pantalones">Pantalones</Link></li>
                    <li><Link className="catLink" to="/catalogo/accesorios">Accesorios</Link></li>
                    <li><Link className="catLink"to="/catalogo/tazas">Tazas</Link></li>
                    <li><Link className="catLink" to="/catalogo">Limpiar</Link></li>
                </ul>
            </div>

            <ItemsListContainer/>
        </div>
    )
}

export default Catalogo