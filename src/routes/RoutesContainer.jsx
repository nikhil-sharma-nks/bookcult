import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, ProductListing } from '../pages/';
import Mockman from 'mockman-js';

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<ProductListing />} />
      <Route path='/mock' element={<Mockman />} />
    </Routes>
  );
};

export default RoutesContainer;
