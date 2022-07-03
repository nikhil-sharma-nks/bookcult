import React, { useState, useEffect } from 'react';
import './productCard.scss';
import { addToCart, addToWishlist, removeFromWishlist } from '../../../api';
import { makeToast } from '../../';
import { useAuth } from '../../../context';
import { checkIfItemInCart, checkIfItemInWishlist } from '../../../utils';
import { useNavigate, Link } from 'react-router-dom';
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
  const { authState } = useAuth();
  const dispatch = useDispatch();
  const productStore = useSelector((state) => state.productStore);

  useEffect(() => {
    setIsProductInCart(checkIfItemInCart(_id, productStore?.cart));
    setIsProductInWishlist(checkIfItemInWishlist(_id, productStore?.wishlist));
  }, [productStore]);

  const handleProductClick = async () => {
    if (!authState.isAuth) {
      makeToast('Please Login First To Add To Cart', 'error');
      navigate('/login');
      return;
    }
    if (!isProductInCart) {
      try {
        const data = await addToCart(product);
        dispatch(addToCartStore(data));
        makeToast(`${title} Added to Cart`, 'success');
      } catch (error) {
        makeToast('Failed Add to Cart', 'error');
        console.log(error);
      }
    } else {
      navigate('/cart');
    }
  };

  const handleWishlist = async () => {
    if (!authState.isAuth) {
      makeToast('Please Login First To Add To Wishlist', 'error');
      navigate('/login');
      return;
    }
    if (!isProductInWishlist) {
      try {
        const data = await addToWishlist(product);
        dispatch(addToWishlistStore(data));
        makeToast(`${title} Added to wishlist`, 'success');
      } catch (error) {
        makeToast('Failed To Add To Wishlist', 'error');
        console.log(error);
      }
    } else {
      try {
        const data = await removeFromWishlist(product._id);
        dispatch(addToWishlistStore(data));
        makeToast(`${title} Removed from wishlist`, 'success');
      } catch (error) {
        makeToast('Failed Removed from wishlist', 'error');
        console.log(error);
      }
    }
  };

  const handleCardClick = () => {
    navigate(`/product/${_id}`);
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
