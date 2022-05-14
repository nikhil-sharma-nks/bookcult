import { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import ProductReducer from '../reducers/ProductReducer';

const ProductContext = createContext();

const useProduct = () => useContext(ProductContext);

const InitialProductState = {
  categories: {},
  cart: [],
  wishlist: [],
  products: [],
  sortBy: '',
  price: 100,
  rating: '',
};

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    ProductReducer,
    InitialProductState
  );

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
        productDispatch({
          type: 'LOAD_CATEGORIES',
          payload: categoryPayload,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProduct };
