const ProductReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'LOAD_PRODUCTS': {
      return {
        ...state,
        products: payload,
      };
    }
    case 'LOAD_CATEGORIES': {
      return {
        ...state,
        categories: payload,
      };
    }
    case 'PRICE': {
      return {
        ...state,
        price: payload,
      };
    }
    case 'CATEGORY': {
      return {
        ...state,
        categories: { ...state.categories, ...payload },
      };
    }
    case 'RATING': {
      return {
        ...state,
        rating: payload,
      };
    }
    case 'SORT_BY': {
      return {
        ...state,
        sortBy: payload,
      };
    }
    case 'SEARCH_QUERY': {
      return {
        ...state,
        searchQuery: payload,
      };
    }
    case 'CLEAR': {
      for (const category in state.categories)
        state.categories[category] = false;
      return {
        categories: state.categories,
        cart: [],
        wishlist: [],
        products: state.products,
        sortBy: '',
        price: 1000,
        rating: '',
        searchQuery: '',
      };
    }
    default:
      return state;
  }
};
export default ProductReducer;
