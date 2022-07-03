import React, { useEffect, useState } from 'react';
import { ProductCard } from '../..';
import './productContainer.scss';
import { useProduct } from '../../../context/';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../';
import { getProducts, getCategories } from '../../../api';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadProducts,
  loadCategories,
} from '../../../redux/slices/productSlice';

import {
  filterByCategory,
  filterByPrice,
  sortByFilter,
  searchProducts,
  filterByRating,
} from '../../../utils';

const ProductsContainer = () => {
  const { productState, productDispatch } = useProduct();

  const [loading, setLoading] = useState(false);
  const productStore = useSelector((state) => state.productStore);
  const { categories, price, products, rating, sortBy, searchQuery } =
    productStore;
  const dispatch = useDispatch();
  const [uniqueProducts, setUniqueProducts] = useState([]);

  const { categoryName } = useParams();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const products = await getProducts();
        // productDispatch({
        //   type: 'LOAD_PRODUCTS',
        //   payload: products,
        // });
        dispatch(loadProducts(products));
        setUniqueProducts(products);
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

        // productDispatch({
        //   type: 'LOAD_CATEGORIES',
        //   payload: modifiedCategoryPayload,
        // });
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
