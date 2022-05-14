import React from 'react';
import { ProductCard } from '../..';
import './productContainer.scss';
import { useProduct } from '../../../context/ProductContext';

const ProductsContainer = () => {
  const { productState } = useProduct();

  return (
    <div className='products-container my-4'>
      {productState?.products?.map((product) => (
        <ProductCard {...product} />
      ))}
    </div>
  );
};

export { ProductsContainer };
