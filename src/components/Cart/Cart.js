import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"
import './Cart.css'
import moment from 'moment'
import {collection, addDoc, getFirestore, updateDoc, doc} from 'firebase/firestore'
import { useNavigate } from "react-router-dom"
import swal from "sweetalert"
import Swal from "sweetalert2"





const Cart = () => {
    const navigate = useNavigate()

    const {cart, removeItem, total, clear} = useContext(CartContext)
    console.log('cart', cart)

    const [order, setOrder] = useState({
        buyer: {
            name: '',
            phone : '',
            email:''
        },
        items: cart,
        total: cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
        date:moment().format("DD/MM/YYYY, h:mm:ss a")
    })
    const db = getFirestore()

    const createOrder = () =>{
        const nombreForm = document.getElementById('nombre-form')
        const celularForm = document.getElementById('celular-form')
        const emailForm = document.getElementById('email-form')

        if(
            nombreForm.value === '' || 
            celularForm.value === '' ||
            emailForm.value === '' 
        ) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Complete los campos del formulario para realizar la orden de compra",
            })
        } else {
            const query = collection(db, 'orders')
            addDoc(query, order)
            .then(({id}) =>{
                console.log(id)
                updateStockProducts(cart)
                swal(`Felicidades ${nombreUsuario} por tu compra.
                Tu nro de orden es: ${id}`,"", "success")
            })
            .catch(() => swal("Error al realizar la compra","", "error")
            )
        }
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
                swal(
                    "Error al actualizar el stock",
                    "error"
                )
            })
        })
    } 

    const handleInputChange = (e) => {

        setOrder({
            ...order,
            buyer: {
                ...order.buyer,
                [e.target.name]: e.target.value,
            }
        })
    }
    let nombreUsuario = order.buyer.name
    console.log(nombreUsuario)

    return (
        <>
            <Link to={"/"} className="boton-volver">Volver Al Catalogo</Link>
            <h1 className="titulo-carrito">Carrito</h1>
            <>
                {cart.length === 0 ? (
                    <>
                        <h2 className="mensaje">No hay productos en tu carrito</h2>
                    </>
                ) : ( 
                    <>
                        <div className="carrito">   
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
                        </div>
                        <div className="formFlex">
                            <div className="fleInputs">
                                <input id="nombre-form" className="input" name="name" type="text" placeholder="Nombre" value={order.buyer.name} onChange={handleInputChange} />
                            </div>
                            <div className="fleInputs">
                                <input id="celular-form" className="input" name="phone" type="phone" placeholder="Celular" value={order.buyer.phone} onChange={handleInputChange} />
                            </div>
                            <div className="fleInputs">
                                <input id="email-form" className="input" name="email" type="email" placeholder="Email" value={order.buyer.email} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="total">
                            <h2 className="titulo-total">Total: $ {total()}</h2>
                            <button className="boton-limpiar" onClick={() => clear()}>Limpiar carrito</button>
                            <button className="boton-orden" onClick={createOrder}>Terminar Compra</button>
                        </div>
                    </>
                )}                
            </>
        </>
        
    )
}

export default Cart
