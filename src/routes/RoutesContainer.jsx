import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  ProductListing,
  Login,
  Signup,
  Cart,
  Wishlist,
  SingleProduct,
  Checkout,
  Orders,
  Profile,
  ErrorPage,
} from '../pages/';
import { Error } from '../components';
import AuthenticatedRoutes from './AuthenticatedRoutes';

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<ProductListing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/products/:categoryName' element={<ProductListing />} />
      <Route path='/product/:productId' element={<SingleProduct />} />
      <Route path='/' element={<AuthenticatedRoutes />}>
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesContainer;
