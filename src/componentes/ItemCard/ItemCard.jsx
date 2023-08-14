import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {

    return (
        <div className="col-3 m-2 divCard">
            <h3>{item.titulo}</h3>
            <div className="imagenDiv">
                <img className="imgCard" src={item.imagen} alt={item.titulo} />
                {
                    item.stock == 0 && <div className="outOfStock">
                        <p>Producto sin Stock</p>
                    </div>
                }
            </div>
            <p>{item.descripcion}</p>
            <p>Preico: ${item.precio}</p>
            {item.stock < 10 && item.stock !== 0
                ? <h4>Quedan {item.stock} unidades</h4>
                : null}
            <Link to={item.stock == 0 ? '' : `/producto/${item.id}`} className="btn btnVerMas m-2">Ver mas</Link>
        </div>
    )
}

export default ItemCard