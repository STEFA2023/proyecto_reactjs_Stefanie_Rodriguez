import { useState } from "react";
import ItemCountPresentacional from "./ItemCountPresentacional";
import { products } from "../../../productsMock";


export const ItemCountContainer = ({ productId }) => {
    const product = products.find(item => item.id === productId);
    const [counter, setCounter] = useState(1);

    const sumar = () => {
        if (product && counter < product.stock) {
            setCounter(counter + 1);
        } else {
            alert("Stock máximo");
        }
    }
    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };
    return (
        <div>
            <ItemCountPresentacional sumar={sumar} restar={restar} counter={counter}/>
        </div>
    );
};

export default ItemCountContainer;