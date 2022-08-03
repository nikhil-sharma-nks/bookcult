import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: {},
  cart: [],
  wishlist: [],
  products: [],
  orders: [],
  sortBy: '',
  price: 1000,
  rating: '',
  searchQuery: '',
  isMobileViewOpen: false,
  cartTotal: '',
  cartSummary: {
    cartTotal: '',
    totalCart: '',
    selectedAddress: '',
    paymentId: '',
  },
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
      // state.searchQuery = '';
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
    clearSearch: (state, action) => {
      state.searchQuery = '';
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
      state.cartTotal = '';
    },
    toggleMenu: (state) => {
      state.isMobileViewOpen = !state.isMobileViewOpen;
    },
    addCartTotal: (state, action) => {
      state.cartTotal = action.payload;
      state.cartSummary.cartTotal = action.payload;
    },
    addSelectedAddress: (state, action) => {
      state.cartSummary.selectedAddress = action.payload;
    },
    addPaymentId: (state, action) => {
      state.cartSummary.paymentId = action.payload;
      state.cartSummary.totalCart = state.cart;
    },
    orderConfirmed: (state, action) => {
      state.cart = [];
      state.orders = [...state.orders, action.payload];
      state.cartSummary = {
        cartTotal: '',
        totalCart: '',
        selectedAddress: '',
        paymentId: '',
      };
    },
    loadOrders: (state, action) => {
      state.orders = action.payload;
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
  addCartTotal,
  addSelectedAddress,
  addPaymentId,
  orderConfirmed,
  loadOrders,
  clearSearch,
} = productSlice.actions;

export default productSlice.reducer;
