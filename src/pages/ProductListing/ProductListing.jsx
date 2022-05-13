import React from 'react';
import './productListing.scss';
import { ProductsContainer, Filter } from '../../components';

const ProductListing = () => {
  return (
    <div className='product-listing'>
      <Filter />
      <ProductsContainer />
    </div>
  );
};

export { ProductListing };
