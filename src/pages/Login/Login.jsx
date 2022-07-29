import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import { loginUser } from '../../api';
import { makeToast, Spinner } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCartStore,
  addToWishlistStore,
  loginUserStore,
  loadOrders,
} from '../../redux/';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });
  const testCredentials = {
    email: 'nikhil.harsh.sharma@gmail.com',
    password: '123',
  };
  const dispatch = useDispatch();
  const authStore = useSelector((state) => state.authStore);

  useEffect(() => {
    if (authStore.isAuth) {
      makeToast('You Are Already Logged In', 'success');
      navigate('/products');
    }
  }, []);

  const loginHandler = async (event, loginInput) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await loginUser(loginInput);
      if (data) {
        makeToast('Login successful!', 'success');
        const { encodedToken, foundUser } = data;
        const authData = {
          token: encodedToken,
          user: foundUser,
          isAuth: true,
        };

        delete authData.user.password;
        delete authData.user.confirmPassword;
        dispatch(loginUserStore(authData));
        dispatch(addToCartStore(authData.user.cart));
        dispatch(addToWishlistStore(authData.user.wishlist));
        dispatch(loadOrders(authData.user.orders));
        navigate('/products');
      } else {
        setLoading(false);
        makeToast('Login Failed, Try Again!', 'error');
      }
    } catch (error) {
      makeToast('Login Failed, Try Again!', 'error');
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInput((input) => ({
      ...input,
      [name]: value,
    }));
  };
  const selectTestCredentials = (event) => {
    event.preventDefault();
    setLoginInput({ ...testCredentials });
    loginHandler(event, testCredentials);
  };
  return (
    <>
      <div className='auth-page theme-background'>
        {loading ? (
          <Spinner />
        ) : (
          <div className='login-page-container-bookcult'>
            <form
              className='form-group'
              onSubmit={(event) => loginHandler(event, loginInput)}
            >
              <p className='text-xxl text-centered color-primary'>Login</p>
              <label htmlFor='login_email' className='form-label'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                className='form-control'
                id='login_email'
                placeholder='Enter your email'
                onChange={handleChange}
                value={loginInput.email}
              />
              <label htmlFor='login_password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                name='password'
                className='form-control'
                id='login_password'
                placeholder='Enter your password'
                onChange={handleChange}
                value={loginInput.password}
              />

              <div className='form-options-container mt-4'>
                <div>
                  <input
                    type='checkbox'
                    id='rememberMe'
                    name='rememberMe'
                    value='newsletter'
                  />
                  <label className='ml-1' htmlFor='rememberMe'>
                    Remember Me
                  </label>
                </div>
                <div>
                  <div>Forget Password</div>
                </div>
              </div>
              <button className='btn btn-primary mt-3' type='submit'>
                Login
              </button>
              <button
                className='btn btn-primary-outlined mt-3'
                type='submit'
                onClick={(event) => selectTestCredentials(event)}
              >
                Login With Test Credentials
              </button>
              <div className='mt-3 text-centered'>
                <Link to='/signup' className='sign-up-link'>
                  Don't Have An Account? Create one!
                </Link>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export { Login };
