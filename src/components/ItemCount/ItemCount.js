/* import React, {useState} from 'react' */
import './ItemCount.css';


const ItemCount = ({cantidad,setCantidad,stock}) => {

    const sumar =()=>{
        setCantidad(actualValor=>actualValor+1)
    }
    const restar =() =>{
        setCantidad(actualValor=>actualValor-1)
    } 
    
    return (
        <div>
            <button className="boton-sumar-restar" onClick={sumar} disabled={cantidad>=stock}>+</button>
                <spam>{cantidad}</spam>
            <button className="boton-sumar-restar" onClick={restar} disabled={cantidad<1}>-</button>
        </div>
    )
}

export default ItemCount