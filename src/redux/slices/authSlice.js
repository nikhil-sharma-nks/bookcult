import { createSlice } from '@reduxjs/toolkit';
let initialState = {};
try {
  initialState = {
    token: JSON.parse(localStorage.getItem('token')),
    user: JSON.parse(localStorage.getItem('user')),
    isAuth: JSON.parse(localStorage.getItem('isAuth')),
  };
} catch {
  initialState = {
    isAuth: false,
    token: '',
    user: {},
  };
}
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
export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    loginUserStore: (state, action) => {
      saveToLocalStorage(action.payload);
      state.token = action.payload.token;
      state.isAuth = action.payload.isAuth;
      state.user = action.payload.user;
    },
    logoutUserStore: (state, action) => {
      saveToLocalStorage({ isAuth: false, token: '', user: {} });
      state.token = '';
      state.isAuth = false;
      state.user = {};
    },
    updateUser: (state, action) => {
      const { updatedUser } = action.payload;
      state.user = updatedUser;
      localStorage.setItem('user', JSON.stringify(updatedUser));
    },
  },
});

export const { loginUserStore, logoutUserStore, updateUser } =
  authSlice.actions;

export default authSlice.reducer;
