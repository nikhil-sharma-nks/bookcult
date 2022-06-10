import React, { useEffect, useState } from 'react';
import { ProductCard } from '../..';
import './productContainer.scss';
import { useProduct } from '../../../context/';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../';
import { getProducts, getCategories } from '../../../api';

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
  const [loading, setLoading] = useState(false);

  const { categoryName } = useParams();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const products = await getProducts();
        productDispatch({
          type: 'LOAD_PRODUCTS',
          payload: products,
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
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
  const uniqueProducts = [...new Set(searchedProducts)];
  return (
    <>
      <div className='products-container py-4'>
        {loading ? (
          <Spinner />
        ) : (
          uniqueProducts?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))
        )}
      </div>
    </>
  );
};

export { ProductsContainer };
