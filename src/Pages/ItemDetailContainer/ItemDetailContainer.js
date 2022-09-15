import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import data from "../../components/ItemListContainer/mockData";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const {id} = useParams()
    
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProduct.then((response) => {
            const dataFiltrada =response.filter((item)=> item.id === id)
            setProduct(...dataFiltrada)
        })
        .catch((error) =>console.log(error))
    }, [])
    
    const getProduct = new Promise ((resolve, reject) =>{
            setTimeout(() => {

                resolve(data/* [2] */)
            },2000)
        })

    return (
        <div className="productos">
            <ItemDetail item={product}/>
        </div>
    )
}

export default ItemDetailContainer