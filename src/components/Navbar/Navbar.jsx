import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navigationbar-container'>
      <div className='navbar'>
        <a href='/'>
          <div className='navbar-header'>
            <div className='h2'>BookCult</div>
          </div>
        </a>
        <div className='navbar-search'>
          <i className='fa-solid fa-magnifying-glass'></i>
          <input
            type='text'
            className='form-control'
            placeholder='Search Products Here'
          />
        </div>
        <div className='navigation-buttons'>
          <a href='./pages/cart.html'>
            <div className='badge-container'>
              <i className='fas fa-shopping-cart'></i>
              <span className='badge badge-icon'>5</span>
            </div>
          </a>
          <a href='./pages/wishlist.html'>
            <div className='badge-container'>
              <i className='fas fa-heart'> </i>
              <span className='badge badge-icon'>5</span>
            </div>
          </a>
          <a href='./pages/login.html'>
            <button className='btn btn-primary-outlined'>Login</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
