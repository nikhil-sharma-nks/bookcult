import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useProduct, useAuth } from '../../context';
import './navbar.scss';
import { makeToast } from '../../components';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { productState, productDispatch } = useProduct();
  const { authState, authDispatch } = useAuth();
  const { searchQuery } = productState;
  const handleLogout = () => {
    makeToast('You Are Now Logged Out', 'success');
    authDispatch({
      type: 'LOGOUT',
    });
    productDispatch({ type: 'LOGOUT' });
    navigate('/');
  };
  const handleFocus = () => {
    if (location.pathname === '/') {
      navigate('/products');
    }
  };
  const handleChange = (e) => {
    productDispatch({
      type: 'SEARCH_QUERY',
      payload: e.target.value,
    });
  };
  return (
    <div className='navigationbar-container'>
      <div className='navbar'>
        <Link to='/'>
          <div className='navbar-header'>
            <div className='h2'>BookCult</div>
            <Link to='/products' className='product-link'>
              Products
            </Link>
          </div>
        </Link>
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
            onClick={() =>
              productDispatch({
                type: 'SEARCH_QUERY',
                payload: '',
              })
            }
          ></i>
        </div>
        <div className='navigation-buttons'>
          <Link to='/cart'>
            <div className='badge-container'>
              <i className='fas fa-shopping-cart'></i>
              <span className='badge badge-icon'>
                {productState.cart ? productState.cart.length : '0'}
              </span>
            </div>
          </Link>
          <Link to='/wishlist'>
            <div className='badge-container'>
              <i className='fas fa-heart'> </i>
              <span className='badge badge-icon'>
                {' '}
                {productState.wishlist ? productState.wishlist.length : '0'}
              </span>
            </div>
          </Link>
          {authState.isAuth && authState.token ? (
            <div className='dropdown'>
              <div className='avatar-text avatar-circular avatar-small'>
                {authState.user.firstName.charAt(0).toUpperCase() +
                  authState.user.lastName.charAt(0).toUpperCase()}
              </div>
              <div className='dropdown-content'>
                <div>Profile</div>
                <div onClick={handleLogout}>Logout</div>
              </div>
            </div>
          ) : (
            <Link to='/login'>
              <button className='btn btn-primary-outlined'>Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export { Navbar };
