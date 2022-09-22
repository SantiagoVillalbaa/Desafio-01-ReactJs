import './ItemDetail.css'
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from 'react';
import { CartContext } from '../../context/cartContext';


const ItemDetail = ({item}) => {

    const {addToCart} = useContext(CartContext)

    function onAdd (item,cantidad){
        addToCart(item, cantidad)
    }

    const[cantidad,setCantidad] = useState(1)

    /* const handleClick = () =>{
        console.log(cantidad)
    } */

    return (
        <div className="card-productos">
                <Link to={'/'}><button>Volver</button></Link>
                <img src={item.image} alt={item.title}/>
                <h2 className="titulo-cards">{item.title}</h2>
                <h3 className="precio-cards">Precio: ${item.price}</h3> 
                <p className="precio-cards">{item.description}</p>
                <ItemCount setCantidad={setCantidad} cantidad={cantidad} stock={item.stock}/>
                <Link to={'/cart'}><button onClick={() => onAdd(item)} className="boton-comprar">Agregar al Carrito</button></Link>
        </div>
    )
}

export default ItemDetail