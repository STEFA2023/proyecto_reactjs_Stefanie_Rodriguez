import { useEffect, useState, } from 'react';
import { ItemDetailPresentacional } from './ItenDetailPresentacional';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../productsMock';

export const ItemDetailContainer = () => {

  const { id } = useParams();

    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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

    const onAdd = ( cantidad )=>{
      let infoProducto ={
        ...item,
        quantity: cantidad
      };
      console.log(infoProducto);
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
