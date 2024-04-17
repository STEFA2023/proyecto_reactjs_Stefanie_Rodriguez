import { useContext, useEffect, useState, } from 'react';
import { ItemDetailPresentacional } from './ItenDetailPresentacional';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../productsMock';
import { CartContext } from '../../../context/CartContext';

export const ItemDetailContainer = () => {

  const { id } = useParams();

    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { addToCart } = useContext(CartContext);

    useEffect (() => {
      setIsLoading(true);
      getProduct(id)
        .then(resp => {
          setItem(resp);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching product:', error);
          setIsLoading(false);
        });
    }, [id] );

    const onAdd = ( cantidad ) => {
      let infoProducto = {
        ...item,
        quantity: parseInt(cantidad)
      }
      console.log(infoProducto);
      addToCart(infoProducto);
    };

    return (
      <>
        {isLoading ? <h2>Cargando productos...</h2> : (item && (<ItemDetailPresentacional productId={item.id} onAdd={onAdd}
                        Titulo={item.title}
                        Price={item.price}
                        Description={item.description}
                        Image={item.img} 
                        />
                      )
                    )}
    </>
  );
};
