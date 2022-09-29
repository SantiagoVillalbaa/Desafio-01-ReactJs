import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/cartContext";
import  { useContext } from "react";

const CartWiget = () => {
    const {cart} = useContext(CartContext)
    return(
        <button className='carrito'>
            <FaShoppingCart/>
            <span>{cart.length}</span>
        </button>
    )
}

export default CartWiget