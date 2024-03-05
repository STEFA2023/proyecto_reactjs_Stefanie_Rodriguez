import { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../productsMock';

export const ItemDetailContainer = () => {

  const { id } = useParams();

    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect (() => {
      getProduct(id)
        .then(resp => {
          setItem(resp);
          setIsLoading(false)
        });
    }, [] )

  return (
    <>
    {item ? <h2>Cargando productos...</h2> : <ItemDetail {...item} />}
    </>
  )
}
