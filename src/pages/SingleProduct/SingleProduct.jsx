import React, { useState, useEffect } from 'react';
import './singleProduct.scss';
import { useParams } from 'react-router-dom';
import { checkIfItemInCart, checkIfItemInWishlist } from '../../utils';
import { makeToast, Spinner } from '../../components';
import { useNavigate } from 'react-router-dom';
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
  getProducts,
} from '../../api';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadProducts,
  addToCartStore,
  addToWishlistStore,
} from '../../redux/slices/productSlice';
import { ErrorPage } from '../';

const SingleProduct = () => {
  const navigate = useNavigate();

  const [isProductInCart, setIsProductInCart] = useState(false);
  const [isProductInWishlist, setIsProductInWishlist] = useState(false);
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { productId } = useParams();

  const productStore = useSelector((state) => state.productStore);
  const authStore = useSelector((state) => state.authStore);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const products = await getProducts();
        dispatch(loadProducts(products));
        // dispatch(addToCartStore([]));
        setIsProductInCart(false);
        setIsProductInWishlist(false);
        const foundProduct = products.find((item) => item._id === productId);
        if (foundProduct) {
          setIsProductInCart(checkIfItemInCart(productId, productStore?.cart));
          setIsProductInWishlist(
            checkIfItemInWishlist(productId, productStore?.wishlist)
          );
          setProduct(foundProduct);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (product) {
      setIsProductInCart(checkIfItemInCart(productId, productStore?.cart));
      setIsProductInWishlist(
        checkIfItemInWishlist(productId, productStore?.wishlist)
      );
    }
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
    if (!isProductInWishlist) {
      try {
        const data = await addToWishlist(product);
        if (data) {
          dispatch(addToWishlistStore(data));
          makeToast(`${product.title} Added to wishlist`, 'success');
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
          makeToast(`${product.title} Removed from wishlist`, 'success');
        } else {
          showErrorMessage();
        }
      } catch (error) {
        makeToast('Failed Removed from wishlist', 'error');
        console.log(error);
      }
    }
  };

  const showErrorMessage = () => {
    makeToast(`Action Failed, See Log For It's Reason`, 'error');
    console.log(
      "This function was failed because, you might have refreshed the page somewhere, since this is a frontend application which doesn't have the real backend, it uses mock backend mockbee and mirajeJs which on reloading srves entire mock backend again instead of persisting. So you might want to logout, reload and log in again with test credentials or signup again and use the features of this app without reloading"
    );
  };

  return (
    <>
      {!product && !isLoading && <ErrorPage />}

      <div className='single-product-page theme-background'>
        {isLoading ? (
          <Spinner />
        ) : (
          product && (
            <>
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
                    <p className='color-primary text-xxl product-title'>
                      {product.title}
                    </p>
                    <p className='text-l color-grey product-author-name'>
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
            </>
          )
        )}
      </div>
    </>
  );
};

export { SingleProduct };
