import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({lista}) => {
    console.log(lista)
    return (
        <div>
            {
                lista.map((product) => (
                    <div className="productos" key={product.id}>
                        <Item 
                        title={product.title} 
                        price = {product.price} 
                        image={product.image}
                        stock={product.stock}/>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList