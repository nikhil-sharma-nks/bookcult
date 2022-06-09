import React from 'react';
import './featured.scss';
import { FictionFeatured, NonFictionFeatured, SelfHelp } from '../../assets';
import { useNavigate } from 'react-router-dom';

const Featured = () => {
  const navigate = useNavigate();
  const featuredCollections = [
    {
      img: FictionFeatured,
      url: '/products/fiction',
    },
    {
      img: NonFictionFeatured,
      url: '/products/non-fiction',
    },
    {
      img: SelfHelp,
      url: '/products/self-help',
    },
  ];
  const handleFeaturedClick = (url) => navigate(url);
  return (
    <div className='mb-4'>
      <div className='h1 m-4 text-centered featured-heading'>
        Featured Categories
      </div>
      <div className='collections'>
        {featuredCollections.map((item, index) => (
          <img
            key={index}
            className='featured-collection'
            src={item.img}
            alt='Featured Item'
            onClick={() => handleFeaturedClick(item.url)}
          />
        ))}
      </div>
    </div>
  );
};

export { Featured };
