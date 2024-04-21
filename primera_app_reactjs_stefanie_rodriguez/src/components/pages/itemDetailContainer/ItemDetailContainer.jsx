import { useContext, useEffect, useState, } from 'react';
import { ItemDetailPresentacional } from './ItenDetailPresentacional';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../productsMock';
import { CartContext } from '../../../context/CartContext';


import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export const ItemDetailContainer = () => {
  
  const { id } = useParams();
  const { addToCart, getTotalItemsById } = useContext(CartContext);

  const initial = getTotalItemsById(id)
  console.log(initial)
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  function GradientCircularProgress() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <React.Fragment>
            <svg width={0} height={0}>
                <defs>
                    <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#e01cd5" />
                        <stop offset="100%" stopColor="#1CB5E0" />
                    </linearGradient>
                </defs>
            </svg>
            <CircularProgress style={{ width: 100, height: 100 }} sx={{ 'svg circle': { stroke: 'url(#my_gradient)' }}} />
        </React.Fragment>
        </div>
    );
}


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
              //<h2>Cargando producto...</h2>
              <GradientCircularProgress />
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