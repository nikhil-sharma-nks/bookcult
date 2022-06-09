import React, { useState, useEffect } from 'react';
import './singleProduct.scss';
import { useParams } from 'react-router-dom';
import { useProduct, useAuth } from '../../context';
import { checkIfItemInCart, checkIfItemInWishlist } from '../../utils';
import { makeToast, Spinner } from '../../components';
import { useNavigate, Link } from 'react-router-dom';
import { addToCart, addToWishlist, removeFromWishlist } from '../../api';

const SingleProduct = () => {
  const navigate = useNavigate();

  const [isProductInCart, setIsProductInCart] = useState(false);
  const [isProductInWishlist, setIsProductInWishlist] = useState(false);
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { productState, productDispatch } = useProduct();

  const { authState } = useAuth();
  const { productId } = useParams();

  useEffect(() => {
    console.log({ productState });
    console.log({ productId });
    setIsLoading(true);
    const foundProduct = productState.products.find(
      (item) => item._id === productId
    );
    if (foundProduct) {
      setIsProductInCart(checkIfItemInCart(productId, productState?.cart));
      setIsProductInWishlist(
        checkIfItemInWishlist(productId, productState?.wishlist)
      );
      setProduct(foundProduct);
    }
    console.log({ foundProduct });
    setIsLoading(false);
  }, [productState]);

  const handleProductClick = async () => {
    if (!authState.isAuth) {
      makeToast('Please Login First To Add To Cart', 'error');
      navigate('/login');
      return;
    }
    if (!isProductInCart) {
      try {
        const data = await addToCart(product);
        productDispatch({
          type: 'ADD_TO_CART',
          payload: data,
        });
        makeToast(`${product.title} Added to Cart`, 'success');
      } catch (error) {
        makeToast('Failed Add to Cart', 'error');
        console.log(error);
      }
    } else {
      navigate('/cart');
    }
  };
  const handleWishlist = async () => {
    if (!isProductInWishlist) {
      try {
        const data = await addToWishlist(product);
        productDispatch({
          type: 'ADD_TO_WISHLIST',
          payload: data,
        });

        makeToast(`${product.title} Added to wishlist`, 'success');
      } catch (error) {
        makeToast('Failed To Add To Wishlist', 'error');
        console.log(error);
      }
    } else {
      try {
        const data = await removeFromWishlist(product._id);
        productDispatch({
          type: 'ADD_TO_WISHLIST',
          payload: data,
        });
        makeToast(`${product.title} Removed from wishlist`, 'success');
      } catch (error) {
        makeToast('Failed Removed from wishlist', 'error');
        console.log(error);
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        product && (
          <div className='single-product-page theme-background'>
            <div className='product-header'>
              <div className='product-image-container'>
                <img
                  src={product.img}
                  alt='product'
                  className='product-image'
                />
              </div>
              <div className='product-info'>
                <div className='product-name'>
                  <p className='product-title color-primary text-xxl'>
                    {product.title}
                  </p>
                  <p className='product-author-name text-l color-grey'>
                    {product.author}
                  </p>
                </div>
                <div className='price-container'>
                  <p className='text-l  color-success'>
                    Price : ₹{product.discountedPrice}
                  </p>
                  <p className='text-l mt-2'>
                    Original Price : ₹{product.price}
                  </p>
                  <p className='text-l mt-2'>
                    Discount Amount : ₹{product.discountedAmount}
                  </p>
                  <p className='text-l mt-2 color-success'>
                    Discount Percentage : {product.discountedPercentage}
                  </p>
                </div>
                <div className='button-container'>
                  {!isProductInCart ? (
                    <button
                      className='btn btn-primary'
                      onClick={handleProductClick}
                    >
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
                      Add To Wishlist
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className='product-description mt-4'>
              {product.bookInfo.summary}
            </div>
          </div>
        )
      )}
      {!product && (
        <p className='text-xxl text-centered'>This Product Does Not Exists</p>
      )}
    </>
  );
};

export { SingleProduct };
