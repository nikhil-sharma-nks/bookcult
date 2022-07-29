import React from 'react';
import './productListing.scss';
import { ProductsContainer, Filter } from '../../components';
import { useSelector } from 'react-redux';

const ProductListing = () => {
  const productStore = useSelector((state) => state.productStore);
  const { isMobileViewOpen } = productStore;

  return (
    <div className='product-listing theme-background'>
      <Filter />
      {!isMobileViewOpen && <ProductsContainer />}
    </div>
  );
};

export { ProductListing };
