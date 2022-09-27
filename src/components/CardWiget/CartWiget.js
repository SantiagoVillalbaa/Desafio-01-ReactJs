import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/cartContext";
import  { useContext } from "react";

const CartWiget = () => {
    const {cart} = useContext(CartContext)
    return(
        <button className='carrito'>
            <a className='carrito-prueba'><FaShoppingCart/></a>
            <span>{cart.length}</span>
        </button>
    )
}

export default CartWiget