import { useState } from "react";
import './ItemDetail.css'


const ItemDetail = ({item}) => {
    const[cantidad,setCantidad] = useState(1)

    const sumar =()=>{
        setCantidad(actualValor=>actualValor+1)
    }
    const restar =() =>{
        setCantidad(actualValor=>actualValor-1)
    }
    return (
        <div className="card-productos">
                <img src={item.image} alt={item.title}/>
                <h2 className="titulo-cards">{item.title}</h2>
                <h3 className="precio-cards">Precio: ${item.price}</h3>
                <p className="precio-cards">{item.description}</p>
                <div>
                    <button className="boton-sumar-restar" onClick={sumar} disabled={cantidad>=item.stock}>+</button>
                    <spam>{cantidad}</spam>
                    <button className="boton-sumar-restar" onClick={restar} disabled={cantidad<1}>-</button>
                </div>
                <button className="boton-comprar">Agregar al Carrito</button>
        </div>
    )
}

export default ItemDetail