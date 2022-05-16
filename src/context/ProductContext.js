import { createContext, useContext, useReducer, useEffect } from 'react';
import ProductReducer from '../reducers/ProductReducer';

const ProductContext = createContext();

const useProduct = () => useContext(ProductContext);

const InitialProductState = {
  categories: {},
  cart: [],
  wishlist: [],
  products: [],
  sortBy: '',
  price: 1000,
  rating: '',
  searchQuery: '',
};

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    ProductReducer,
    InitialProductState
  );

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProduct, InitialProductState };
