import { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import data from '../../components/ItemListContainer/mockData'
import { useParams } from 'react-router-dom'
import {getFirestore, doc, getDoc} from 'firebase/firestore'



const ItemDetailContainer = () => {
    const {id} = useParams()
    
    const [product, setProduct] = useState([])

    const db = getFirestore()

    const getProduct = ()=>{
        const queryDoc = doc(db, 'items', id)

        getDoc(queryDoc).then(res =>{
            console.log(res.id)
            console.log(res.data())
            setProduct({ id: res.id, ...res.data() })
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        setTimeout(() => {
            getProduct()
        }, 0)
    }, [id])
    
    
    return (
        <div className="productos">
            <ItemDetail item={product}/>
        </div>
    )
}

export default ItemDetailContainer
