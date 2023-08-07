import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.scss'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemsListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

        // 1.-Armar la referencia (sync)
        const productosRef = collection(db, "productos")
        const q = categoryId
                    ? query(productosRef, where('category', '==', categoryId))
                    : productosRef

        // 2.-Llamar a esa referencia (async)
        getDocs(q)
            .then((resp) => {
                const docs = resp.docs.map((doc) => {
                    return{
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(()=> setLoading(false))

    }, [categoryId])

    return (
        <div className="catalogoDiv">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={productos} />
            }
        </div>
    )
}

export default ItemsListContainer