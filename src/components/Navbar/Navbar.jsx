import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
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
          />
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
