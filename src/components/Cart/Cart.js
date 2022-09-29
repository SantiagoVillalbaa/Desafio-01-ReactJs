import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"
import ItemCount from "../ItemCount/ItemCount"
import './Cart.css'


const Cart = () => {
    const {cart, addToCart, removeItem, total, clear} = useContext(CartContext)
    console.log('cart', cart)
    return (
        <div className="carrito">
            <h1 className="titulo-carrito">Carrito</h1>
            {cart.length === 0 ? (
                <>
                    <h2>No hay productos en tu carrito</h2>
                    <Link to={"/"}>Volver Al Catalogo</Link>
                </>
            ) : ( 
                <>
                    {cart.map((item) =>(
                        <div className="cart-carrito" key={item.id}>
                            <img width={'150px'} src={item.image} alt={item.title}/>
                            <h2 className="titulo-card-carrito">{item.title}</h2>
                            <h3 className="card-carrito"> Precio unidad: ${item.price}</h3>
                            <h3 className="card-carrito"> Cantidad: {item.quantity}</h3>
                            <h3 className="card-carrito">SubTotal: ${item.quantity >1 ? item.price * item.quantity : item.price}</h3>
                            <button className="boton-eliminar" onClick={() => removeItem (item.id)}>Eliminar producto</button>
                        </div>
                        
                    ))}
                    <div>
                        <h2 className="titulo-total">Total: $ {total()}</h2>
                        <button className="boton-eliminar" onClick={() => clear()}>Limpiar carrito</button>
                    </div>
                </>
            )}
        </div>
        
    )
}

export default Cart