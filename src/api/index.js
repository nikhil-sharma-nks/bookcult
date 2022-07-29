export {
  loginUser,
  signupUser,
  addPhoneNo,
  addAddress,
  addOrder,
} from './authService';
export {
  addToCart,
  getUserCart,
  getUserWishlist,
  addToWishlist,
  removeFromWishlist,
  removeFromCart,
  updateCartQuantity,
  removeAllCart,
} from './cartWishlist';

export { getProducts, getCategories } from './productService';
