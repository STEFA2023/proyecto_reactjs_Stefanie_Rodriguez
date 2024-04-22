import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidgetContainer = () => {
    const { getTotalItems } = useContext(CartContext);
    let totalItems = 0;

    try {
        totalItems = parseInt(getTotalItems());
        if (isNaN(totalItems)) {
            throw new Error("getTotalItems returned NaN");
        }
    } catch (error) {
        console.error("Error getting total items:", error);
    }

    return (
        <div>
            <span>{totalItems}</span>
            <MdShoppingCart color="#FFCDEA"/>
        </div>
    );
};

export default CartWidgetContainer;
