import { useContext, useEffect, useState, } from 'react';
import { ItemDetailPresentacional } from './ItenDetailPresentacional';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../productsMock';
import { CartContext } from '../../../context/CartContext';

export const ItemDetailContainer = () => {
  
  const { id } = useParams();
  const { addToCart, getTotalItemsById } = useContext(CartContext);

  const initial = getTotalItemsById(id)
  console.log(initial)
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


    useEffect (() => {
      setIsLoading(true)
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

    const onAdd = cantidad => {
      if (item) {
          const infoProducto = {
              ...item,
              quantity: parseInt(cantidad)
          };
          addToCart(infoProducto);
      }
  };

  return (
      <>
          {isLoading ? (
              <h2>Cargando producto...</h2>
          ) : item ? (
              <ItemDetailPresentacional
                  productId={item.id}
                  onAdd={onAdd}
                  Titulo={item.title}
                  Price={item.price}
                  Description={item.description}
                  Image={item.img}
                  initial = {initial}
              />
          ) : (
              <h2>Producto no encontrado</h2>
          )}
      </>
  );
};

export default ItemDetailContainer;