import { useContext, useEffect, useState, } from 'react';
import { ItemDetailPresentacional } from './ItenDetailPresentacional';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import CircularProgress from '@mui/material/CircularProgress';
import { doc, getDoc} from "firebase/firestore";
import { database } from "../../../firebaseConfig";


export const ItemDetailContainer = () => {
    const { id } = useParams();
    const { addToCart, getTotalItemsById } = useContext(CartContext);
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true);
            try {
                const docRef = doc(database, "products", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setItem(docSnap.data());
                } else {
                    console.error('No such document!');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const initial = getTotalItemsById(id);

    const onAdd = (product, quantity) => {
        if (item) {
            const infoProducto = {
                ...product,
                quantity: parseInt(quantity)
            };
            addToCart(infoProducto);
        }
    };
    return (
        <>
            {isLoading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress style={{ width: 100, height: 100 }} />
                </div>
            ) : item ? (
                <ItemDetailPresentacional
                    id={item.id}
                    onAdd={onAdd}
                    Titulo={item.title}
                    Price={item.price}
                    Description={item.description}
                    Image={item.img}
                    initial={initial}
                />
            ) : (
                <h2>Producto no encontrado</h2>
            )}
        </>
    );
};

export default ItemDetailContainer;
