import React from 'react';
import './wishlist.scss';
import { ProductCard, Error } from '../../components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const productStore = useSelector((state) => state.productStore);

  const { wishlist } = productStore;
  return (
    <>
      <div className='wishlist-page  theme-background'>
        <p className='text-xxl text-centered pt-2 theme-background'>
          My wishlist ({wishlist.length}{' '}
          {wishlist.length === 0 || wishlist.length === 1 ? 'Item' : 'Items'})
        </p>
        <div className='wishlist-container py-4'>
          {wishlist.map((wishlistItem) => (
            <ProductCard product={wishlistItem} key={wishlistItem._id} />
          ))}
          {wishlist.length === 0 && (
            <Error>
              <p className=' mt-2 h2'>Wishlist Is Empty</p>
              <Link to='/products'>
                <button className='btn btn-primary'>Go To Products</button>
              </Link>
            </Error>
          )}
        </div>
      </div>
    </>
  );
};

export { Wishlist };
