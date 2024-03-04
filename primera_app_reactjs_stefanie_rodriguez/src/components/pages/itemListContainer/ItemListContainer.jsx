import { useEffect, useState } from "react";
import { Greeting } from "../../common/greeting/Greeting";
import ItemListPresentacional  from "./itemListPresentacional";
import { products } from "../../../productsMock";

const ItemListContainer = () => {

    const [items, setItems] = useState ([])


    useEffect(()=> {
        const tarea = new Promise((resolve, reject) =>  {
            resolve(products)
    });

        tarea
            .then((res) => {
                setItems(res)
            })
            .catch((error) => {
                console.log("Error al cargar los producto:",error);
            });
    }, [])
    

    return( 
    /*<>
        <Greeting />
        <ItemListPresentacional items={items} />
    </>*/
    <>
    {
        items.length > 0 ? <ItemListPresentacional items={items} /> : <h1>No hay </h1>
    }
    </>
    );
};

export default ItemListContainer;
