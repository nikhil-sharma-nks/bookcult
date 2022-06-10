import React from 'react';
import './productListing.scss';
import { ProductsContainer, Filter } from '../../components';
import { useProduct } from '../../context';

const ProductListing = () => {
  const { productState } = useProduct();
  const { isMobileViewOpen } = productState;

  return (
    <div className='product-listing'>
      <Filter />
      {!isMobileViewOpen && <ProductsContainer />}
    </div>
  );
};

export { ProductListing };
