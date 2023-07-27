import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemDetail from "./ItemDetail/ItemDetail"
import './ItemDetailContainer.scss'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams ()

    useEffect(() => {
        setLoading(true)

        //1- armar la ref
        const itemRef = doc(db, "productos", itemId)

        //2- llamar la ref
        getDoc(itemRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch(e => console.log(e))
            .finally(()=> setLoading(false))      
    }, [])

    return(
        <main>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={item}/>
            }
        </main>
    )
}

export default ItemDetailContainer