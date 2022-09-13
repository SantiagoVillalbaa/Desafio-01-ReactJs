import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import data from "../ItemListContainer/mockData";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProduct.then((response) => {
            setProduct(response.find((item)=> item.id === '1'))
        })
        .catch((error) =>console.log(error))
    }, [])
    
    const getProduct = new Promise ((resolve, reject) =>{
            setTimeout(() => {

                resolve(data/* [2] */)
            },2000)
        })

    return (
        <>
            <ItemDetail item={product}/>
        </>
    )
}

export default ItemDetailContainer