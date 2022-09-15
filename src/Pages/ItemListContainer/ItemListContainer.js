import data from '../../components/ItemListContainer/mockData'
import { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const{categoryName} = useParams()

    const [productList, setProductList] = useState([])

    useEffect(() => {
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
        })

    return (
        <>
            <ItemList lista={productList}/>
        </>
    )
}

export default ItemListContainer