import {useState } from "react"
import { CartContext } from "./cartContext"
import Swal from "sweetalert2";
import swal from 'sweetalert';

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart =(item, quantity) =>{
        if(isInCart(item.id)){
        } else{
            setCart([...cart, {...item, quantity}])
        }
    }
    const isInCart = (id) =>{
        return cart.some((item) => item.id === id)
    }

    const clear = () =>{
        setCart([])
        console.log(cart)
    }

    const removeItem = (productId) =>{
        let nuevoArreglo = []
        cart.forEach((product) =>{
            if(product.id !== productId){
            nuevoArreglo.push(product)
        }
        })
        swal("Producto eliminado","", "success")
        setCart(nuevoArreglo)
    }

    const total = () =>{
        return cart.reduce((acum, valor) => acum + valor.quantity * valor.price, 0)
    }

    return (
        <CartContext.Provider value={{cart, addToCart, clear, removeItem, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider