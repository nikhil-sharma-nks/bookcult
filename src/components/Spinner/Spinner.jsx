import React from 'react';
import './spinner.scss';
const Spinner = () => {
  return (
    <div className='spinner-overlay theme-background'>
      <div className='spinner-container theme-background'></div>
    </div>
  );
};

export { Spinner };
