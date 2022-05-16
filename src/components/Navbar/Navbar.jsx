import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useProduct } from '../../context';
import './navbar.scss';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { productState, productDispatch } = useProduct();
  const { searchQuery } = productState;
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
            class='fa-solid fa-xmark search-cancel'
            onClick={() =>
              productDispatch({
                type: 'SEARCH_QUERY',
                payload: '',
              })
            }
          ></i>
        </div>
        <div className='navigation-buttons'>
          <Link to='/'>
            <div className='badge-container'>
              <i className='fas fa-shopping-cart'></i>
              <span className='badge badge-icon'>5</span>
            </div>
          </Link>
          <Link to='/'>
            <div className='badge-container'>
              <i className='fas fa-heart'> </i>
              <span className='badge badge-icon'>5</span>
            </div>
          </Link>
          <Link to='/'>
            <button className='btn btn-primary-outlined'>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
