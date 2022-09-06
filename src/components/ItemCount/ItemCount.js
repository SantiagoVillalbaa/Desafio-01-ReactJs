import React, {useState} from 'react'
import './ItemCount.css';


const ItemCount = ({stock}) => {
    const [items, setItems] = useState(0)

    const sumar = () => items < stock  ? setItems (items + 1) : alert("No hay mas stock")
    const restar = () => items > 0 ? setItems (items - 1) : alert("Eliga un numero positivo de productos")
    return (
        <div className='contador'>
            <h2>Stock {stock}</h2>
            <h3>Tengo {items} productos.</h3>
            <div>
                <button className='boton-sr' onClick={sumar}>Agregar Item</button>
                <button className='boton-sr'  onClick={restar}>Eliminar Item</button>
            </div>
        </div>
    )
}

export default ItemCount