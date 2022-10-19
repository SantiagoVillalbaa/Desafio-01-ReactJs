import Item from '../Item/Item'
import './ItemList.css'
import { Link } from 'react-router-dom'

const ItemList = ({lista}) => {
    console.log(lista)
    return (
        <div className="productos">
            {
                lista.map((product) => (
                    <Link key={product.id} to={'/detalles/' + product.id} style={{textDecoration: 'none'}}>
                        <Item 
                        title={product.title} 
                        price = {product.price} 
                        image={product.image}
                        stock={product.stock}
                        category={product.category}/>
                    </Link>
                ))
            }
        </div>
    )
}

export default ItemList
