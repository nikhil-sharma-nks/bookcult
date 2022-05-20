import axios from 'axios';

const addToCart = async (product) => {
  let token = JSON.parse(localStorage.getItem('token'));
  const addToCartBaseUrl = '/api/user/cart';
  try {
    const {
      data: { cart },
      status,
    } = await axios.post(
      addToCartBaseUrl,
      { product: product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status >= 200 && status <= 300) {
      return cart;
    } else {
      throw new Error("Couldn't add to cart!");
    }
  } catch (error) {
    console.log(error.message);
  }
};

const getUserCart = async () => {
  let token = JSON.parse(localStorage.getItem('token'));
  const getUserCartBaseUrl = '/api/user/cart';
  try {
    const {
      data: { cart },
      status,
    } = await axios.get(getUserCartBaseUrl, {
      headers: {
        authorization: token,
      },
    });
    if (status >= 200 && status <= 300) {
      return cart;
    } else {
      throw new Error("Couldn't get cart");
    }
  } catch (error) {
    console.log(error.message);
  }
};

const getUserWishlist = async () => {
  let token = JSON.parse(localStorage.getItem('token'));

  const getUserWishlistBaseUrl = '/api/user/wishlist';
  try {
    const {
      data: { wishlist },
      status,
    } = await axios.get(getUserWishlistBaseUrl, {
      headers: {
        authorization: token,
      },
    });
    if (status >= 200 && status <= 300) {
      return wishlist;
    } else {
      throw new Error("Couldn't get wishlist");
    }
  } catch (error) {
    console.log(error.message);
  }
};

const addToWishlist = async (product) => {
  let token = JSON.parse(localStorage.getItem('token'));
  console.log({ token, product });
  const addToWishlistBaseUrl = '/api/user/wishlist';
  try {
    const {
      data: { wishlist },
      status,
    } = await axios.post(
      addToWishlistBaseUrl,
      {
        product: product,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status >= 200 && status <= 300) {
      return wishlist;
    } else {
      throw new Error("Couldn't add to wishlist!");
    }
  } catch (error) {
    console.log(error.message);
  }
};

const removeFromWishlist = async (productId) => {
  let token = JSON.parse(localStorage.getItem('token'));

  const removeFromWishlistBaseUrl = `/api/user/wishlist/${productId}`;
  try {
    const {
      data: { wishlist },
      status,
    } = await axios.delete(removeFromWishlistBaseUrl, {
      headers: {
        authorization: token,
      },
    });
    if (status >= 200 && status <= 300) {
      return wishlist;
    } else {
      throw new Error("Couldn't add to wishlist!");
    }
  } catch (error) {
    console.log(error.message);
  }
};
export {
  addToCart,
  getUserCart,
  getUserWishlist,
  addToWishlist,
  removeFromWishlist,
};
