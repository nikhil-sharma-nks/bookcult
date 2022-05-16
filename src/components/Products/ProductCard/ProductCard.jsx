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
  tag,
  rating,
}) => {
  return (
    <div className='card vertical-card pos-rel'>
      <div className='image-container'>
        <img className='pic' src={img} alt='' />
        {tag ? (
          <div className='card-tag'>
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </div>
        ) : (
          ''
        )}
        <i class='fas fa-heart wishlist'></i>
      </div>
      <div className='card-info'>
        <div className='card-header'>{title}</div>
        <div className='card-descripion mt-1'>
          <div className='author-name'>{author}</div>
          <div className='rating  mr-3'>
            {rating}
            <i class='fa-solid fa-star star-rating ml-1'></i>
          </div>
        </div>
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
