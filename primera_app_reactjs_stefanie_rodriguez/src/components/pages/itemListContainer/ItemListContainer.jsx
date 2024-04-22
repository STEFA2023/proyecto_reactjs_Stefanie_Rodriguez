import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Greeting } from "../../common/greeting/Greeting";
import ItemListPresentacional from "./itemListPresentacional";

import { database } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {

    const { category } = useParams();
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setIsLoading(true)
        let productsCollection = collection(database, "products");

        let consult = productsCollection;

        if (category) {
            let productsCollectionFilter = query(
                productsCollection,
                where("category", "==", category)
            );
            consult = productsCollectionFilter;
        }

        getDocs(consult)
            .then((res) => {
                let arrayDataId = res.docs.map((elemento) => {
                    return { ...elemento.data(), id: elemento.id };
                });

                //getDocs(productsCollectionFilter).then( (res ) => {

                setItems(arrayDataId);
            })
            .finally(() => setIsLoading(false));
    }, [category]);

    return (
        <>
            <Greeting />
            {items.length > 0 ? (
                <ItemListPresentacional items={items} />
            ) : (
                <h1>No hay productos en esta categoría</h1>
            )}
        </>
    );
};

export default ItemListContainer;
