import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: {},
  cart: [],
  wishlist: [],
  products: [],
  sortBy: '',
  price: 1000,
  rating: '',
  searchQuery: '',
  isMobileViewOpen: false,
};

export const productSlice = createSlice({
  name: 'productStore',
  initialState,
  reducers: {
    loadProducts: (state, action) => {
      const products = action.payload;
      state.products = products;
    },
    loadCategories: (state, action) => {
      const categories = action.payload;
      state.categories = categories;
    },
    changedFilter: (state, action) => {
      const filter = action.payload;
      state[filter.type] = filter.payload;
    },
    clearFilter: (state) => {
      for (const category in state.categories)
        state.categories[category] = false;
      state.sortBy = '';
      state.rating = '';
      state.price = 1000;
      state.searchQuery = '';
    },
    searchedQuery: (state, action) => {
      const searchQuery = action.payload;
      state.searchQuery = searchQuery;
    },
    addToCartStore: (state, action) => {
      state.cart = action.payload;
    },
    addToWishlistStore: (state, action) => {
      state.wishlist = action.payload;
    },
    handleLogoutStore: (state) => {
      state.categories = {};
      state.cart = [];
      state.wishlist = [];
      state.products = [];
      state.sortBy = '';
      state.rating = '';
      state.price = 1000;
      state.searchQuery = '';
    },
    toggleMenu: (state) => {
      state.isMobileViewOpen = !state.isMobileViewOpen;
    },
  },
});

export const {
  loadProducts,
  loadCategories,
  changedFilter,
  clearFilter,
  searchedQuery,
  addToCartStore,
  addToWishlistStore,
  handleLogoutStore,
  toggleMenu,
} = productSlice.actions;

export default productSlice.reducer;
