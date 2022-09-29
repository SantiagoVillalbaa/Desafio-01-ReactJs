import data from '../../components/ItemListContainer/mockData'
import { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore';


const ItemListContainer = () => {

    const{categoryName} = useParams()

    const [productList, setProductList] = useState([])

    const getProducts =  () =>{
        const db = getFirestore()
        const querySnapshot =  collection(db, 'items')
        if (categoryName) {
            const queryFilter = query(
                querySnapshot,
                where("categoryId", "==", categoryName)
            )
            getDocs(queryFilter).then((response) => {
                const data = response.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
                setProductList(data)
            })
        } else {
            getDocs(querySnapshot).then((response) => {
                const data = response.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
                setProductList(data)
            })
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getProducts()
        }, 1000)
    }, [categoryName]) 



    /* useEffect(() => {
        getProducts.then((response) => {
            if(categoryName) {
                setProductList(response.filter((item) => item.category === categoryName))
            } else{
                setProductList(response)
            }
        })
        .catch((error) =>console.log(error))
    }, [categoryName])
    
    const getProducts = new Promise ((resolve, reject) =>{
            setTimeout(() => {

                resolve(data)
            },2000)
        }) */

    return (
        <>
            <ItemList lista={productList}/>
        </>
    )
}

export default ItemListContainer