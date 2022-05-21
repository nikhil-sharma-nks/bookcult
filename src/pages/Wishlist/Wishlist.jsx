import React from 'react';
import './wishlist.scss';
import { ProductCard } from '../../components';
import { useProduct } from '../../context';
const Wishlist = () => {
  const { productState } = useProduct();
  const { wishlist } = productState;
  return (
    <>
      <p className='text-xxl text-centered mt-2'>
        My wishlists ({wishlist.length} Items)
      </p>
      <div className='wishlist-container my-4'>
        {wishlist.map((wishlistItem) => (
          <ProductCard product={wishlistItem} key={wishlistItem._id} />
        ))}
      </div>
    </>
  );
};

export { Wishlist };
