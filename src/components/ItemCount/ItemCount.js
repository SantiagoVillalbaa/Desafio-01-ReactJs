/* import React, {useState} from 'react' */
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import './ItemCount.css'


const ItemCount = ({cantidad,setCantidad,stock}) => {

    const sumar =()=>{
        setCantidad(actualValor=>actualValor+1)
    }
    const restar =() =>{
        setCantidad(actualValor=>actualValor-1)
    } 
    
    return (
        <div>
            <button className="boton-sumar-restar" onClick={sumar} disabled={cantidad>=stock}><FaPlus/></button>
                <spam className='cantidad'>{cantidad}</spam>
            <button className="boton-sumar-restar" onClick={restar} disabled={cantidad<1}><FaMinus/></button>
        </div>
    )
}

export default ItemCount