import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";


const ItemsListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(r => {
                if (categoryId) {
                    setProductos (r.filter(prod.categoria === categoryId))
                }else{
                    setProductos(r)
                }
            })
            .catch(e => console.log(e))
            .finally(()=> {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div className="catalogoDiv">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={productos}/>
            }
        </div>
    )
}

export default ItemsListContainer