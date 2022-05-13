import React from 'react';
import './productCard.scss';

const ProductCard = ({
  title,
  author,
  price,
  img,
  discountedPrice,
  discountedAmount,
  discountedPercentage,
}) => {
  console.log(title);
  return (
    <div className='card vertical-card pos-rel'>
      <div className='image-container'>
        <img className='pic' src={img} alt='' />
        <div className='card-tag'>Bestseller</div>
      </div>
      <div className='card-info'>
        <div className='card-header'>{title}</div>
        <div className='card-descripion mt-1'>{author}</div>
        <div className='price-container my-2'>
          <div className='current-price h3'>₹{discountedPrice}</div>
          <div className='original-price h3'>₹{price}</div>
          <div className='discount-tag'>{discountedPercentage} off</div>
        </div>
        <div className='button-container'>
          <button className='btn btn-primary'>
            <i className='fas fa-shopping-cart mr-1'></i> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
