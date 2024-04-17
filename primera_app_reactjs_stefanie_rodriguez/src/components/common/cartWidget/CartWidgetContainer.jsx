import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidgetContainer = () => {

    const { cart } = useContext(CartContext);
    
    return (
        <div>
                <span>{cart.length}</span>
                <MdShoppingCart color="purple"/>
            
        </div>
    );
};

export default CartWidgetContainer;