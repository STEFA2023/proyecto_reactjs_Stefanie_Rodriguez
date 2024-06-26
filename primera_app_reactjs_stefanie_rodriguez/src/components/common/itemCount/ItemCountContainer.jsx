import { useState, useEffect } from "react";
import ItemCountPresentacional from "./ItemCountPresentacional";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../firebaseConfig";
import Swal from 'sweetalert2';

const ItemCountContainer = ({ onAdd, initial = 1 }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(initial);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(database, "products"));
                const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(productsData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };
        fetchProducts();
    }, []);

    const product = products.find(item => item.id === item.id);

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
            setCounter(counter - 1);
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
            onAdd(product, counter);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <ItemCountPresentacional sumar={sumar} restar={restar} counter={counter} onAdd={addToCart} />
        </div>
    );
};

export default ItemCountContainer;
