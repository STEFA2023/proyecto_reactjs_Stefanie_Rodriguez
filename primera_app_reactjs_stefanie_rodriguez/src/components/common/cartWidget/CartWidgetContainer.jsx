import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidgetContainer = () => {

    const { getTotalItems } = useContext(CartContext);
    
let totalItems = getTotalItems()

    return (
        <div>
                <span>{totalItems}</span>
                <MdShoppingCart color="#FFCDEA"/>
            
        </div>
    );
};

export default CartWidgetContainer;