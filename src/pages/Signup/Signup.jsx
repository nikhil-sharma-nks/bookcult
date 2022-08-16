import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.scss';
import { signupUser, loginUser } from '../../api';
import { makeToast, Spinner } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCartStore,
  addToWishlistStore,
  loginUserStore,
  loadOrders,
} from '../../redux/';
const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signupInput, setSignupInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const authStore = useSelector((state) => state.authStore);

  useEffect(() => {
    if (authStore.isAuth) {
      makeToast('You Are Already Logged In', 'success');
      navigate('/products');
    }
  }, []);
  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setSignupInput({
      ...signupInput,
      [name]: value,
    });
  };
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

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    if (signupInput.password !== signupInput.confirmPassword) {
      makeToast("Password Doesn't match! Please Try Again", 'error');
      return;
    }
    setLoading(true);
    try {
      const data = await signupUser(signupInput);
      if (data) {
        makeToast('Signup successful', 'success');
        loginHandler(event, {
          email: signupInput.email,
          password: signupInput.password,
        });
      } else {
        setLoading(false);
        makeToast('Signup Failed, Try Again!', 'error');
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      makeToast('SignUp Failed, Try Again!', 'error');
    }
  };

  const demoSignUp = [
    {
      firstName: 'Jon',
      lastName: 'Doe',
      email: 'jondoe@gmail.com',
      password: '123123',
      confirmPassword: '123123',
    },
    {
      firstName: 'Virat',
      lastName: 'Kholi',
      email: 'viratKholi@gmail.com',
      password: '123123',
      confirmPassword: '123123',
    },
    {
      firstName: 'MS',
      lastName: 'Dhoni',
      email: 'MSD@gmail.com',
      password: '123123',
      confirmPassword: '123123',
    },
    {
      firstName: 'Kishore',
      lastName: 'Kumar',
      email: 'kishore_kumar@gmail.com',
      password: '123123',
      confirmPassword: '123123',
    },
    {
      firstName: 'Mohd.',
      lastName: 'Rafi',
      email: 'mohd_rafi@gmail.com',
      password: '123123',
      confirmPassword: '123123',
    },
  ];

  const fillDemoData = () => {
    const randomDemoInput = Math.floor(Math.random() * demoSignUp.length);
    setSignupInput({
      ...demoSignUp[randomDemoInput],
    });
  };

  return (
    <>
      <div className='auth-page theme-background'>
        {loading ? (
          <Spinner />
        ) : (
          <div className='signup-page-container'>
            <form
              className='form-group'
              onSubmit={(event) => handleSignupSubmit(event)}
            >
              <p className='text-xxl text-centered color-primary'>Sign Up</p>
              <label htmlFor='signup_first_name' className='form-label'>
                First Name
              </label>
              <input
                type='text'
                className='form-control'
                id='signup_first_name'
                name='firstName'
                placeholder='Enter your first name'
                value={signupInput.firstName}
                onChange={inputChangeHandler}
                required
              />
              <label htmlFor='signup_last_name' className='form-label'>
                Last Name
              </label>
              <input
                type='text'
                className='form-control'
                id='signup_last_name'
                name='lastName'
                placeholder='Enter your last name'
                value={signupInput.lastName}
                onChange={inputChangeHandler}
                required
              />
              <label htmlFor='signup_email' className='form-label'>
                Email address
              </label>
              <input
                type='email'
                className='form-control'
                id='signup_email'
                placeholder='Enter your email'
                name='email'
                onChange={inputChangeHandler}
                value={signupInput.email}
                required
              />
              <label htmlFor='signup_password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='signup_password'
                placeholder='Enter your password'
                name='password'
                onChange={inputChangeHandler}
                value={signupInput.password}
                required
              />
              <label htmlFor='signup_password_confirm' className='form-label'>
                Confirm Password
              </label>
              <input
                type='password'
                className='form-control'
                id='signup_password_confirm'
                placeholder='Conform your password'
                name='confirmPassword'
                onChange={inputChangeHandler}
                value={signupInput.confirmPassword}
                required
              />
              {signupInput.confirmPassword.length > 0 &&
              signupInput.confirmPassword === signupInput.password ? (
                <p className='feedback feedback-success'>Password Matched!</p>
              ) : signupInput.confirmPassword.length > 0 ? (
                <p className='feedback feedback-error'>Password Not Matched</p>
              ) : (
                ''
              )}

              <div className='form-options-container mt-4'>
                {/* <div>
                  <input
                    type='checkbox'
                    id='rememberMe'
                    name='subscribe'
                    value='newsletter'
                  />
                  <label className='ml-1' htmlFor='rememberMe'>
                    I accept all terms and conditions
                  </label>
                </div> */}
              </div>
              <button className='btn btn-primary mt-3' type='submit'>
                Sign Up
              </button>
              <button
                className='btn btn-primary-outlined mt-3'
                onClick={fillDemoData}
                type='button'
              >
                Fill Demo Data
              </button>
              <div className='mt-3 text-centered'>
                <Link to='/login' className='sign-up-link'>
                  Already Have An Account, Sign In!
                </Link>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export { Signup };
