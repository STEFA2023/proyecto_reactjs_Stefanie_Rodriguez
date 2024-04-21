import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Greeting } from "../../common/greeting/Greeting";
import ItemListPresentacional from "./itemListPresentacional";
import { products } from "../../../productsMock";

const ItemListContainer = () => {
    const { category } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        let filteredItems;
        if (category && category !== "todos") {
            // Filtrar los productos por la categoría especificada en la URL
            filteredItems = products.filter(product => product.category === category);
        } else {
            // Mostrar todos los productos si la categoría no está especificada o es "todos"
            filteredItems = products;
        }
        setItems(filteredItems);
    }, [category]); // Vuelve a ejecutar el efecto cuando cambie la categoría en la URL

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
