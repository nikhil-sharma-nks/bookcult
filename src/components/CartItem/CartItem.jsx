import React, { useState, useEffect } from 'react';
import './cartItem.scss';
import {
  removeFromCart,
  updateCartQuantity,
  addToWishlist,
  removeFromWishlist,
} from '../../api';
import { checkIfItemInWishlist } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCartStore,
  addToWishlistStore,
} from '../../redux/slices/productSlice';

import { Spinner, makeToast } from '../';
const CartItem = ({ cartItem }) => {
  const {
    title,
    author,
    price,
    img,
    discountedPrice,
    discountedAmount,
    discountedPercentage,
    tag,
    rating,
    _id,
    qty,
  } = cartItem;

  const [quantity, setQuantity] = useState(qty || 1);
  const [loading, setLoading] = useState(false);
  const [isProductInWishlist, setIsProductInWishlist] = useState(false);
  const dispatch = useDispatch();
  const productStore = useSelector((state) => state.productStore);
  useEffect(() => {
    setIsProductInWishlist(checkIfItemInWishlist(_id, productStore?.wishlist));
  }, [productStore]);

  const handleQuantity = async (type) => {
    if (type === 'increment') {
      setQuantity((q) => q + 1);
      try {
        setLoading(true);
        const cart = await updateCartQuantity(_id, type);
        dispatch(addToCartStore(cart));
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    } else if (type === 'decrement') {
      if (quantity - 1 === 0) {
        removeItemFromCart();
        return;
      }
      setQuantity((qty) => qty - 1);
      try {
        setLoading(true);
        const cart = await updateCartQuantity(_id, type);
        dispatch(addToCartStore(cart));
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    }
  };

  const removeItemFromCart = async (cart) => {
    try {
      setLoading(true);
      const cart = await removeFromCart(_id);
      dispatch(addToCartStore(cart));
      makeToast(`${title} removed from cart`, 'success');
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  const handleWishlist = async () => {
    if (!isProductInWishlist) {
      try {
        const data = await addToWishlist(cartItem);
        dispatch(addToWishlistStore(data));

        const cart = await removeFromCart(_id);
        dispatch(addToCartStore(cart));

        makeToast(`${title} Moved to wishlist`, 'success');
      } catch (error) {
        makeToast('Failed To Add To Wishlist', 'error');
        console.log(error);
      }
    } else {
      try {
        const data = await removeFromWishlist(cartItem._id);
        dispatch(addToWishlistStore(data));
        makeToast(`${title} Removed from wishlist`, 'success');
      } catch (error) {
        makeToast('Failed Removed from wishlist', 'error');
        console.log(error);
      }
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='card horizontal-card pos-rel cart-card theme-body-background'>
          <div className='image-container'>
            <img className='pic' src={img} alt='' />
          </div>
          <div className='card-info'>
            <div className='h3 card-header'>{title}</div>
            <div className='card-descripion mt-1'>{author}</div>
            <div className='price-container my-2'>
              <div className='current-price h3'>₹{discountedPrice}</div>
              <div className='original-price h3'>₹{price}</div>
              <div className='discount-tag'>{discountedPercentage} off</div>
            </div>
            <div className='quantity-container'>
              <button
                className='btn btn-primary-outlined btn-floating'
                onClick={() => handleQuantity('decrement')}
              >
                <i className='fas fa-minus'></i>
              </button>
              <input
                type='number'
                default='1'
                min='1'
                value={quantity}
                className='quantity-input theme-background'
                onChange={handleQuantity}
              />
              <button
                className='btn btn-primary-outlined btn-floating'
                onClick={() => handleQuantity('increment')}
              >
                <i className='fas fa-plus '></i>
              </button>
            </div>
            <div className='button-container'>
              <button
                className='btn btn-error-outlined'
                onClick={removeItemFromCart}
              >
                <i className='fas fa-shopping-cart mr-1'></i>
                Remove From Cart
              </button>
              {isProductInWishlist ? (
                <button
                  className='btn btn-error-outlined'
                  onClick={handleWishlist}
                >
                  <i className='fas fa-shopping-cart mr-1'></i>
                  Remove From Wishlist
                </button>
              ) : (
                <button
                  className='btn btn-primary-outlined'
                  onClick={handleWishlist}
                >
                  <i className='fas fa-shopping-cart mr-1'></i>
                  Move To Wishlist
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { CartItem };
