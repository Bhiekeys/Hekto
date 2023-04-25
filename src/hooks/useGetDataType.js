/** @format */

import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../store/cartContext';

const useGetDataType = (dataType = 'featured') => {
  const { products } = useContext(CartContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (dataType === 'all') {
      setData(products);
    } else {
      setData(
        products.filter((product) => {
          return product.category == dataType;
        })
      );
    }
  }, [products, dataType]);
  return data;
};

export default useGetDataType;
