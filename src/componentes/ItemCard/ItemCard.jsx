import { Link } from "react-router-dom";

const ItemCard = ({item}) => {

    return (
        <div className="col-3 m-2 divCard">
            <h3>{item.titulo}</h3>
            <img className="imgCard" src={item.imagen} alt={item.titulo} />
            <p>{item.descripcion}</p>
            <p>Preico: ${item.precio}</p>
            {item.stock < 10 && <h4>Quedan {item.stock} unidades</h4> }
            <Link to={`/producto/${item.id}`} className="btn btnVerMas m-2">Ver mas</Link>
        </div>
    )
}

export default ItemCard