import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({productos}) => {

    return (
        <div className="container">
            <div className="row centrarProductos">
                {
                    productos.map((prod) => <ItemCard key={prod.id} item={prod} />)
                }
            </div>
        </div>
    )
}

export default ItemList