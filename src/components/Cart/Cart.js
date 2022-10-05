import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import './Cart.css';
import moment from 'moment';
import {collection, addDoc, getFirestore, updateDoc, doc} from 'firebase/firestore';
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const navigate = useNavigate()

    const {cart, addToCart, removeItem, total, clear} = useContext(CartContext)
    console.log('cart', cart)

    const [order, setOrder] = useState({
        buyer: {
            name: 'Juan',
            phone : '12345676',
            email:'test@test.com'
        },
        items: cart,
        total: cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
        date:moment().format("DD/MM/YYYY, h:mm:ss a")
    })
    const db = getFirestore()
    const createOrder = () =>{
            const query = collection(db, 'orders')
            addDoc(query, order)
            .then(({id}) =>{
                console.log(id)
                updateStockProducts(cart)
                alert('Felicidades por tu comprar')
            })
            .catch(() => alert('Tu compra no pudo ser completada, intentalo mas tarde')) 
    }

    const updateStockProducts = () =>{
        cart.forEach(product => {
            const queryUpdate = doc(db, 'items', product.id  )
            updateDoc(queryUpdate, {
                categoryId: product.categoryId,
                description : product.description,
                image: product.image,
                price: product.price,
                title: product.title,
                stock :  product.stock - product.quantity
            }).then (() =>{
                if(cart[cart.length - 1].id === product.id){
                    clear()
                    navigate('/')
                }
    
            }) .catch(() => {
                console.log('error al actualizar el stock')
            })
        })
    } 

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
            <div>
                <button className="boton-orden" onClick={createOrder}>Crear Orden</button>
            </div>
            {/* <div>
                <button className="boton-orden" onClick={updateOrder}>Editar Orden</button>
            </div> */}
        </div>
        
    )
}

export default Cart