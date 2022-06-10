const AuthReducer = (state, action) => {
  const { type, payload } = action;
  const saveToLocalStorage = (state) => {
    const { isAuth, token, user } = state;
    try {
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('isAuth', isAuth);
    } catch (err) {
      console.log(err.message);
    }
  };
  switch (type) {
    case 'ADD_TO_CART':
      // saveToLocalStorage({
      //   ...state,
      //   user: { ...state.user, cart: payload },
      // });
      return {
        ...state,
        user: { ...state.user, cart: payload },
      };
    case 'LOGIN_USER': {
      saveToLocalStorage({ ...state, ...payload });
      return { ...state, ...payload };
    }
    case 'SIGNUP_USER': {
      saveToLocalStorage({ ...state, ...payload });
      return { ...state, ...payload };
    }
    case 'LOGOUT': {
      saveToLocalStorage({ isAuth: false, token: '', user: {} });
      return { isAuth: false, token: '', user: {} };
    }
    case 'ADD_TO_WISHLIST':
      // saveToLocalStorage({
      //   ...state,
      //   user: { ...state.user, wishlist: payload },
      // });
      return {
        ...state,
        user: { ...state.user, wishlist: payload },
      };
    default:
      return state;
  }
};

export { AuthReducer };
