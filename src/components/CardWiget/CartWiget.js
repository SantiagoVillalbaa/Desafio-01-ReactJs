import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/cartContext";
import  { useContext } from "react";
import './CartWiget.css';

const CartWiget = () => {
    const {cart} = useContext(CartContext)

    if(cart.length > 0){
        return(
            <button className='carrito'>
                <FaShoppingCart/>
                <span className="numero-carrito">{cart.length}</span>
            </button>
        )
    } else{
        return
    }

}

export default CartWiget