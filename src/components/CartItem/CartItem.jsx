import React from 'react';
import './cartItem.scss';
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
  } = cartItem;
  return (
    <div className='card horizontal-card pos-rel cart-card'>
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
          <button className='btn btn-primary-outlined btn-floating'>
            <i className='fas fa-minus '></i>
          </button>
          <input
            type='number'
            default='3'
            min='1'
            value='1'
            className='quantity-input'
          />
          <button className='btn btn-primary-outlined btn-floating'>
            <i className='fas fa-plus '></i>
          </button>
        </div>
        <div className='button-container'>
          <button className='btn btn-error-outlined'>Remove From Cart</button>
          <button className='btn btn-primary-outlined mt-1'>
            <i className='far fa-heart mr-1'></i>Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export { CartItem };
