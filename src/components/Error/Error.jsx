import React from 'react';
import ERROR_IMAGE from './error-img.svg';
import './error.scss';
const Error = ({ children }) => {
  return (
    <div className='error-container theme-body-background'>
      <img src={ERROR_IMAGE} alt='error' className='error-image'></img>
      <div className='info-container theme-body-background'>{children}</div>
    </div>
  );
};

export { Error };
