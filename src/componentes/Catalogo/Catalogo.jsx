import ItemsListContainer from "../ItemListContainer/ItemListContainer"
import './catalogo.scss'
import { Link } from "react-router-dom";

const Catalogo = () => {


    return (
        <div className="cuerpoOrden">
            <div className="divCat"> 
                <h2>Categorias</h2>
                <ul>
                    <li><Link className="catLink" to="/catalogo/remera">Remeras</Link></li>
                    <li><Link className="catLink" to="/catalogo/buzos">Buzos</Link></li>
                    <li><Link className="catLink" to="/catalogo/">Pantalones</Link></li>
                    <li><Link className="catLink" to="/catalogo/">Accesorios</Link></li>
                    <li><Link className="catLink"to="/catalogo/">Tazas</Link></li>
                </ul>
            </div>

            <ItemsListContainer/>
        </div>
    )
}

export default Catalogo