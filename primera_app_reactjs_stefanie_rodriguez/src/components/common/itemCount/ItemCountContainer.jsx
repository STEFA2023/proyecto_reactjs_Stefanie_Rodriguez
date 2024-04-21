import { useState } from "react";
import ItemCountPresentacional from "./ItemCountPresentacional";
import { products } from "../../../productsMock";
import Swal from 'sweetalert2';



const ItemCountContainer = ({ onAdd, initial=1 }) => {

    const product = products.find(item => item.id === item.id);

    const [counter, setCounter] = useState(initial);

    const sumar = () => {
        if (product && counter < product.stock) {
            setCounter(counter + 1);
        } else {
            Swal.fire({
                icon: "info",
                iconColor: "#86469C",
                title: "Stock máximo",
                background: "#FFCDEA",
            });
        }
    };

    const restar = () => {
        if (counter > 1) {
            setCounter(counter -1 );
        } else {
            Swal.fire({
                icon: "info",
                iconColor: "#86469C",
                title: "El número ingresado debe ser mayor a cero",
                background: "#FFCDEA",
            });
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