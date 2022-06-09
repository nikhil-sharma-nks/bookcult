import React from 'react';
import { CarouselComponent, Featured } from '../../components';
import './home.scss';
const Home = () => {
  return (
    <>
      <div className='home-page pb-5 theme-body-background'>
        <CarouselComponent />
        <Featured />
      </div>
    </>
  );
};

export { Home };
