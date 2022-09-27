import {useState } from "react"
import { CartContext } from "./cartContext"


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart =(item, quantity) =>{
        if(isInCart(item.id)){
            alert('Ya esta en el carrito')
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
        setCart(nuevoArreglo);
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