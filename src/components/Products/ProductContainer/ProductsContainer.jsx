import React, { useEffect } from 'react';
import { ProductCard } from '../..';
import './productContainer.scss';
import { useProduct } from '../../../context/ProductContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import {
  filterByCategory,
  filterByPrice,
  sortByFilter,
  searchProducts,
  filterByRating,
} from '../../../utils';

const ProductsContainer = () => {
  const { productState, productDispatch } = useProduct();
  const { categories, price, products, rating, sortBy, searchQuery } =
    productState;

  const { categoryName } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get('/api/products');
        productDispatch({
          type: 'LOAD_PRODUCTS',
          payload: products,
        });
      } catch (error) {
        console.log(error);
      }
      try {
        const {
          data: { categories },
        } = await axios.get('/api/categories');

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

        productDispatch({
          type: 'LOAD_CATEGORIES',
          payload: modifiedCategoryPayload,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const filterByCategoryProducts = filterByCategory(categories, products);
  const filterByPriceProducts = filterByPrice(price, filterByCategoryProducts);
  const sortByFilterProducts = sortByFilter(sortBy, filterByPriceProducts);
  const filterByRatingProducts = filterByRating(rating, sortByFilterProducts);
  const searchedProducts = searchProducts(searchQuery, filterByRatingProducts);
  return (
    <div className='products-container my-4'>
      {searchedProducts?.map((product) => (
        <ProductCard {...product} />
      ))}
    </div>
  );
};

export { ProductsContainer };
