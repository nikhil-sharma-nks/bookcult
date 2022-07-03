import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import productSlice from './slices/productSlice';
import authSlice from './slices/authSlice';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
export const store = configureStore({
  reducer: {
    productStore: productSlice,
    authStore: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});
