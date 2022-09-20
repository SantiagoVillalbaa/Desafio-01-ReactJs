import './ItemDetail.css'
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from 'react';


const ItemDetail = ({item}) => {

    const[cantidad,setCantidad] = useState(1)

    const handleClick = () =>{
        console.log(cantidad)
    }

    return (
        <div className="card-productos">
                <img src={item.image} alt={item.title}/>
                <h2 className="titulo-cards">{item.title}</h2>
                <h3 className="precio-cards">Precio: ${item.price}</h3>
                <p className="precio-cards">{item.description}</p>
                <ItemCount setCantidad={setCantidad} cantidad={cantidad} stock={item.stock}/>
                <Link to={'/cart'}><button onClick={handleClick} className="boton-comprar">Agregar al Carrito</button></Link>
        </div>
    )
}

export default ItemDetail