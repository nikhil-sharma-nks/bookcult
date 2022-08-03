import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context';
import './navbar.scss';
import { makeToast } from '../../components';
import { getTotalCartItem } from '../../utils';
import {
  searchedQuery,
  handleLogoutStore,
  toggleMenu,
  logoutUserStore,
} from '../../redux';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const productStore = useSelector((state) => state.productStore);
  const { searchQuery } = productStore;

  const dispatch = useDispatch();
  const authStore = useSelector((state) => state.authStore);

  const handleLogout = () => {
    makeToast('You Are Now Logged Out', 'success');
    dispatch(handleLogoutStore());
    dispatch(logoutUserStore());
    navigate('/');
  };
  const handleFocus = () => {
    if (location.pathname === '/') {
      navigate('/products');
    }
  };
  const handleChange = (e) => dispatch(searchedQuery(e.target.value));

  const toggleMenuClick = () => dispatch(toggleMenu());

  return (
    <div className='navigationbar-container'>
      <div className='navbar'>
        <div className='navbar-header'>
          <Link to='/'>
            <div className='h2 main-title'>BookCult</div>
          </Link>
          <Link to='/products' className='product-link color-primary'>
            Products
          </Link>
        </div>

        {[
          '/',
          '/products',
          '/products/fiction',
          '/products/non-fiction',
          '/products/self-help',
        ].includes(location.pathname) && (
          <div className='navbar-search'>
            <i className='fa-solid fa-magnifying-glass'></i>
            <input
              type='text'
              className='form-control'
              placeholder='Search Products Here'
              value={searchQuery}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <i
              className='fa-solid fa-xmark search-cancel'
              onClick={() => dispatch(searchedQuery(''))}
            ></i>
          </div>
        )}

        <div className='navigation-buttons'>
          {location.pathname.includes('products') ? (
            <i
              className='fa-solid fa-bars menu-hamburg '
              onClick={toggleMenuClick}
            ></i>
          ) : null}

          <div className='theme-container' onClick={toggleTheme}>
            {theme === 'light' ? (
              <i className='fa-regular fa-moon'></i>
            ) : (
              <i className='fa-solid fa-sun'></i>
            )}
          </div>
          <Link to='/cart'>
            <div className='badge-container'>
              <i className='fas fa-shopping-cart'></i>
              <span className='badge badge-icon'>
                {productStore.cart ? getTotalCartItem(productStore.cart) : '0'}
              </span>
            </div>
          </Link>
          <Link to='/wishlist'>
            <div className='badge-container'>
              <i className='fas fa-heart'> </i>
              <span className='badge badge-icon'>
                {' '}
                {productStore.wishlist ? productStore.wishlist.length : '0'}
              </span>
            </div>
          </Link>
          {authStore.isAuth && authStore.token ? (
            <div className='dropdown'>
              <div className='avatar-text avatar-circular avatar-small'>
                {authStore.user.firstName.charAt(0).toUpperCase() +
                  authStore.user.lastName.charAt(0).toUpperCase()}
              </div>
              <div className='dropdown-content'>
                <div onClick={() => navigate('/profile')}>Profile</div>
                <div onClick={() => navigate('/orders')}>Orders</div>
                <div onClick={handleLogout}>Logout</div>
              </div>
            </div>
          ) : (
            <Link to='/login'>
              <button className='btn btn-primary'>Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export { Navbar };
