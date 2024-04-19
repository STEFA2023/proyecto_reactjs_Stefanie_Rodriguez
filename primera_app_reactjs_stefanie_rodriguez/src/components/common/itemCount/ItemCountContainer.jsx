import { useState } from "react";
import ItemCountPresentacional from "./ItemCountPresentacional";
import { products } from "../../../productsMock";



const ItemCountContainer = ({ onAdd, initial=1 }) => {

    const product = products.find(item => item.id === item.id);

    const [counter, setCounter] = useState(initial);

    const sumar = () => {
        if (product && counter < product.stock) {
            setCounter(counter + 1);
        } else {
            alert("Stock máximo");
        }
    };

    const restar = () => {
        if (counter > 1) {
            setCounter(counter -1 );
        } else {
            alert ("el numero ingresado debe ser mayor a uno");
        }
    };
    const addToCart = () => {
        if (product) {
            onAdd(product.id, counter.id);
        }
    };
    return(
        <div>
        <ItemCountPresentacional sumar={sumar} restar={restar} counter={counter} onAdd={addToCart}/>
    </div>
);
};

export default ItemCountContainer;