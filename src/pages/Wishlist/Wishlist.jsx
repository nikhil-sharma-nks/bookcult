import React from 'react';
import './wishlist.scss';
import { ProductCard } from '../../components';
import { useProduct } from '../../context';
import { useSelector, useDispatch } from 'react-redux';

const Wishlist = () => {
  const productStore = useSelector((state) => state.productStore);

  const { productState } = useProduct();
  const { wishlist } = productStore;
  return (
    <>
      <div className='wishlist-page  theme-background'>
        <p className='text-xxl text-centered pt-2 theme-background'>
          My wishlists ({wishlist.length} Items)
        </p>
        <div className='wishlist-container py-4'>
          {wishlist.map((wishlistItem) => (
            <ProductCard product={wishlistItem} key={wishlistItem._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export { Wishlist };
