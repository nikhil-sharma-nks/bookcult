import React from 'react';
import './productListing.scss';
import { ProductsContainer, Filter } from '../../components';
import { useProduct } from '../../context';
import { useSelector, useDispatch } from 'react-redux';

const ProductListing = () => {
  const productStore = useSelector((state) => state.productStore);
  // const { productState } = useProduct();
  const { isMobileViewOpen } = productStore;

  return (
    <div className='product-listing'>
      <Filter />
      {!isMobileViewOpen && <ProductsContainer />}
    </div>
  );
};

export { ProductListing };
