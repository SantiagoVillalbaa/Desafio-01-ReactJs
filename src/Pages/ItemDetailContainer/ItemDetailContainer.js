import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import data from "../../components/ItemListContainer/mockData";
import { useParams } from "react-router-dom";
/* import {getFirestore, doc, getDoc} from 'firebase/firestore'; */



const ItemDetailContainer = () => {
    const {id} = useParams()
    
    const [product, setProduct] = useState([])

   /*  const db = getFirestore()

    const queryDoc = doc(db, 'items', '6q2fc6TgEn7sNqjVU0dJ')
    getDoc(queryDoc).then(res =>{
        console.log(res.id)
        console.log(res.data())
    }).catch(err => console.log(err))
 */

    useEffect(() => {
        getProduct.then((response) => {
            const dataFiltrada =response.filter((item)=> item.id === id)
            setProduct(...dataFiltrada)
        })
        .catch((error) =>console.log(error))
    }, [])
    
    const getProduct = new Promise ((resolve, reject) =>{
            setTimeout(() => {

                resolve(data)
            },2000)
        })

    return (
        <div className="productos">
            <ItemDetail item={product}/>
        </div>
    )
}

export default ItemDetailContainer