import React from 'react';
import { ProductCard } from '../..';
import { products } from '../../../backend/db/products';
import './productContainer.scss';

const ProductsContainer = () => {
  console.log(products);
  return (
    <div className='products-container my-4'>
      {products.map((product) => (
        <ProductCard {...product} />
      ))}
    </div>
  );
};

export { ProductsContainer };
