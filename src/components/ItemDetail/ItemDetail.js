import './ItemDetail.css'
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../context/cartContext';


const ItemDetail = ({item}) => {

    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setTimeout(()=>{
            setCargando(false)
        },2000)
    }, [])
    
    const[cantidad,setCantidad] = useState(1)

    const {cart,addToCart} = useContext(CartContext)

    
    const[condicion, setCondicion] = useState(true)

    function onAdd (item){
        addToCart(item, cantidad)
        setCondicion(false)
    }

    /* const handleClick = () =>{
        console.log(cantidad)
    } */

    return (
        <>
            {cargando ? <h2 className='cargando'>Cargando...</h2>
            : <div className="card-productos">
                <Link to={'/'}><button>Volver</button></Link>
                <img src={item.image} alt={item.title}/>
                <h2 className="titulo-cards">{item.title}</h2>
                <h3 className="precio-cards">Precio: ${item.price}</h3> 
                <p className="precio-cards">{item.description}</p>
                { condicion ? <ItemCount setCantidad={setCantidad} cantidad={cantidad} stock={item.stock}/> : <h2>Ya esta en el carrito</h2>}
                <div>
                    {cart.length > 0 ? 
                    <Link to={'/cart'}>
                        <button className="boton-carrito">Ir al Carrito</button>
                    </Link>
                    : ''}
                    <button onClick={() => onAdd(item)} className="boton-comprar">Agregar al Carrito</button>
                </div>
            </div>
            }
        </>
    )
}

export default ItemDetail