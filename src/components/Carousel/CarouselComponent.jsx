import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  CarouselFiction,
  CarouselNonFiction,
  CarouselAllProducts,
} from '../../assets';
const CarouselComponent = () => {
  const navigate = useNavigate();
  const carousel = [
    {
      img: CarouselFiction,
      url: '/category/fiction',
    },
    {
      img: CarouselNonFiction,
      url: '/category/non-fiction',
    },
    {
      img: CarouselAllProducts,
      url: '/products',
    },
  ];
  const handleClick = (icarouselIndex) => {
    navigate(carousel[icarouselIndex].url);
  };
  return (
    <Carousel
      infiniteLoop
      useKeyboardArrows
      autoPlay
      showThumbs={false}
      swipeable
      onClickItem={handleClick}
    >
      {carousel.map((carouselItem, index) => (
        <img src={carouselItem.img} alt='Carousel' key={index} />
      ))}
    </Carousel>
  );
};

export { CarouselComponent };
