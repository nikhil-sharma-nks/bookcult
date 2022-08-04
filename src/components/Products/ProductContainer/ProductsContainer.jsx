import React, { useEffect, useState } from 'react';
import { ProductCard, Error, makeToast } from '../..';
import './productContainer.scss';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../';
import { getProducts, getCategories, getUserCart } from '../../../api';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import {
  loadProducts,
  loadCategories,
  clearFilter,
  clearSearch,
  addToCartStore,
} from '../../../redux/slices/productSlice';

import {
  filterByCategory,
  filterByPrice,
  sortByFilter,
  searchProducts,
  filterByRating,
} from '../../../utils';

const ProductsContainer = () => {
  const [loading, setLoading] = useState(false);
  const productStore = useSelector((state) => state.productStore);
  const authStore = useSelector((state) => state.authStore);
  const { categories, price, products, rating, sortBy, searchQuery } =
    productStore;
  const dispatch = useDispatch();
  const [uniqueProducts, setUniqueProducts] = useState([]);

  const navigate = useNavigate();
  const { categoryName } = useParams();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const products = await getProducts();
        dispatch(loadProducts(products));
        setUniqueProducts(products);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      if (authStore?.isAuth) {
        const cart = await getUserCart();
        if (cart) {
          dispatch(addToCartStore(cart));
        } else {
          dispatch(addToCartStore([]));
        }
      }
      try {
        const categories = await getCategories();
        const categoryPayload = categories.reduce(
          (previousCategory, currentCategory) => ({
            ...previousCategory,
            [currentCategory.categoryName]: false,
          }),
          {}
        );
        const modifiedCategoryPayload = categoryName
          ? { ...categoryPayload, [categoryName]: true }
          : categoryPayload;

        dispatch(loadCategories(modifiedCategoryPayload));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  useEffect(() => {
    const filterByCategoryProducts = filterByCategory(categories, products);
    const filterByPriceProducts = filterByPrice(
      price,
      filterByCategoryProducts
    );
    const sortByFilterProducts = sortByFilter(sortBy, filterByPriceProducts);
    const filterByRatingProducts = filterByRating(rating, sortByFilterProducts);
    const searchedProducts = searchProducts(
      searchQuery,
      filterByRatingProducts
    );
    setUniqueProducts([...new Set(searchedProducts)]);
  }, [productStore]);

  return (
    <>
      <div className='products-container theme-background py-4'>
        {loading ? (
          <Spinner />
        ) : (
          uniqueProducts?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))
        )}
        {uniqueProducts.length === 0 && (
          <Error>
            <p className='text-l'>No Products with Name "{searchQuery}"</p>
            <div>
              <button
                className='btn btn-primary mr-4 mb-4'
                onClick={() => {
                  dispatch(clearFilter());
                  makeToast('Filters Cleared', 'info');
                }}
              >
                Try Clearing Filters
              </button>
              <button
                className='btn btn-primary mr-4 mb-4'
                onClick={() => {
                  dispatch(clearFilter());
                  dispatch(clearSearch());
                }}
              >
                Clear Search
              </button>

              <button
                type='submit'
                className='btn btn-primary mr-4 mb-4'
                onClick={() => {
                  navigate('/');
                  dispatch(clearSearch());
                }}
              >
                Go To Home
              </button>
            </div>
          </Error>
        )}
      </div>
    </>
  );
};

export { ProductsContainer };
