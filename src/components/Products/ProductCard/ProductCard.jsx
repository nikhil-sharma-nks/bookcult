import React, { useState, useEffect } from 'react';
import './productCard.scss';
import { addToCart, addToWishlist, removeFromWishlist } from '../../../api';
import { makeToast } from '../../';
import { checkIfItemInCart, checkIfItemInWishlist } from '../../../utils';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCartStore,
  addToWishlistStore,
} from '../../../redux/slices/productSlice';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const {
    title,
    author,
    price,
    img,
    discountedPrice,
    discountedPercentage,
    tag,
    rating,
    _id,
  } = product;
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [isProductInWishlist, setIsProductInWishlist] = useState(false);
  const dispatch = useDispatch();
  const productStore = useSelector((state) => state.productStore);
  const authStore = useSelector((state) => state.authStore);

  useEffect(() => {
    setIsProductInCart(checkIfItemInCart(_id, productStore?.cart));
    setIsProductInWishlist(checkIfItemInWishlist(_id, productStore?.wishlist));
  }, [productStore]);

  const handleProductClick = async () => {
    if (!authStore.isAuth) {
      makeToast('Please Login First To Add To Cart', 'error');
      navigate('/login');
      return;
    }
    if (!isProductInCart) {
      try {
        const data = await addToCart(product);
        if (data) {
          dispatch(addToCartStore(data));
          makeToast(`${product.title} Added to Cart`, 'success');
        } else {
          showErrorMessage();
        }
      } catch (error) {
        makeToast('Failed Add to Cart', 'error');
        console.log(error);
      }
    } else {
      navigate('/cart');
    }
  };

  const handleWishlist = async () => {
    if (!authStore.isAuth) {
      makeToast('Please Login First To Add To Wishlist', 'error');
      navigate('/login');
      return;
    }
    if (!isProductInWishlist) {
      try {
        const data = await addToWishlist(product);
        if (data) {
          dispatch(addToWishlistStore(data));
          makeToast(`${title} Added to wishlist`, 'success');
        } else {
          showErrorMessage();
        }
      } catch (error) {
        makeToast('Failed To Add To Wishlist', 'error');
        console.log(error);
      }
    } else {
      try {
        const data = await removeFromWishlist(product._id);
        if (data) {
          dispatch(addToWishlistStore(data));
          makeToast(`${title} Removed from wishlist`, 'success');
        } else {
          showErrorMessage();
        }
      } catch (error) {
        makeToast('Failed Removed from wishlist', 'error');
        console.log(error);
      }
    }
  };

  const handleCardClick = () => {
    navigate(`/product/${_id}`);
  };

  const showErrorMessage = () => {
    makeToast(`Action Failed, See Log For It's Reason`, 'error');
    console.log(
      "This function was failed because, you might have refreshed the page somewhere, since this is a frontend application which doesn't have the real backend, it uses mock backend mockbee and mirajeJs which on reloading srves entire mock backend again instead of persisting. So you might want to logout, reload and log in again with test credentials or signup again and use the features of this app without reloading"
    );
  };

  return (
    <div className='card vertical-card pos-rel'>
      <div className='image-container'>
        <img className='pic' src={img} alt='' onClick={handleCardClick} />
        {tag ? (
          <div className='card-tag'>
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </div>
        ) : (
          ''
        )}
        <i
          className={
            isProductInWishlist
              ? 'fas fa-heart wishlist wishlist-selected'
              : 'fas fa-heart wishlist'
          }
          onClick={handleWishlist}
        ></i>
      </div>
      <div className='card-info'>
        <div className='card-header' onClick={handleCardClick}>
          {title}
        </div>
        <div className='card-descripion mt-1' onClick={handleCardClick}>
          <div className='author-name'>{author}</div>
          <div className='rating  mr-3 color-black'>
            {rating}
            <i className='fa-solid fa-star star-rating ml-1'></i>
          </div>
        </div>
        <div className='price-container my-2' onClick={handleCardClick}>
          <div className='current-price h3'>₹{discountedPrice}</div>
          <div className='original-price h3'>₹{price}</div>
          <div className='discount-tag'>{discountedPercentage} off</div>
        </div>
        <div className='button-container'>
          {!isProductInCart ? (
            <button className='btn btn-primary' onClick={handleProductClick}>
              <i className='fas fa-shopping-cart mr-1'></i>
              Add To Cart
            </button>
          ) : (
            <button
              className='btn btn-primary-outlined'
              onClick={handleProductClick}
            >
              <i className='fas fa-shopping-cart mr-1'></i>
              Go To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
