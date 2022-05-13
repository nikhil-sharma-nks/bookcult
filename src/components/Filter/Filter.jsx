import React from 'react';
import './filter.scss';

const Filter = () => {
  return (
    <div className='filter-container'>
      <div className='filter-clear-container'>
        <p className='text-l'>Filters</p>
        <div className='color-primary'>Clear</div>
      </div>
      <div className='price-range-container mt-4'>
        <p className='text-l'>Price</p>
        <div className='price-container'>
          <p>100</p>
          <p>500</p>
          <p>1000</p>
        </div>
        <input type='range' min='100' max='1000' step='any' />
      </div>
      <div className='category-container mt-4'>
        <p className='text-l'>Category</p>
        <div className='mt-2'>
          <input type='checkbox' id='fiction' name='fiction' />
          <label className='ml-1' for='fiction'>
            Fiction
          </label>
        </div>
        <div className='mt-2'>
          <input type='checkbox' id='non-fiction' name='non-fiction' />
          <label className='ml-1' for='non-fiction'>
            Non-Fiction
          </label>
        </div>
        <div className='mt-2'>
          <input type='checkbox' id='Self-help' name='Self-help' />
          <label className='ml-1' for='Self-help'>
            Self-help
          </label>
        </div>
        <div className='mt-2'>
          <input type='checkbox' id='Academic' name='Academic' />
          <label className='ml-1' for='Academic'>
            Academic
          </label>
        </div>
        <div className='mt-2'>
          <input type='checkbox' id='Biography' name='Biography' />
          <label className='ml-1' for='Biography'>
            Biography
          </label>
        </div>
        <div className='mt-2'>
          <input type='checkbox' id='Philosophy' name='Philosophy' />
          <label className='ml-1' for='Philosophy'>
            Philosophy
          </label>
        </div>
        <div className='mt-2'>
          <input type='checkbox' id='Religious' name='Religious' />
          <label className='ml-1' for='Religious'>
            Religious
          </label>
        </div>
      </div>
      <div className='rating-container mt-4'>
        <p className='text-l'>Rating</p>
        <div className='mt-2'>
          <input
            type='radio'
            id='4_stars_and_above'
            name='price'
            value='4_stars_and_above'
          />
          <label className='ml-1' for='4_stars_and_above'>
            4 Stars And Above
          </label>
        </div>
        <div className='mt-2'>
          <input
            type='radio'
            id='3_stars_and_above'
            name='price'
            value='3_stars_and_above'
          />
          <label className='ml-1' for='3_stars_and_above'>
            3 Stars And Above
          </label>
        </div>
        <div className='mt-2'>
          <input
            type='radio'
            id='2_stars_and_above'
            name='price'
            value='2_stars_and_above'
          />
          <label className='ml-1' for='2_stars_and_above'>
            2 Stars And Above
          </label>
        </div>
        <div className='mt-2'>
          <input
            type='radio'
            id='1_stars_and_above'
            name='price'
            value='1_stars_and_above'
          />
          <label className='ml-1' for='1_stars_and_above'>
            1 Star And Above
          </label>
        </div>
      </div>
      <div className='sort-container mt-4'>
        <p className='text-l'>Sort By</p>
        <div className='mt-2'>
          <input
            type='radio'
            id='Price-Low-To_high'
            name='sort_by'
            value='Price-Low-To_high'
          />
          <label className='ml-1' for='Price-Low-To_high'>
            Price - Low To High
          </label>
        </div>
        <div className='mt-2'>
          <input
            type='radio'
            id='Price-High-To_low'
            name='sort_by'
            value='Price-High-To_low'
          />
          <label className='ml-1' for='Price-High-To_low'>
            Price - High To Low
          </label>
        </div>
        <div className='mt-2'>
          <input type='radio' id='Relevance' name='sort_by' value='Relevance' />
          <label className='ml-1' for='Relevance'>
            Relevance
          </label>
        </div>
        <div className='mt-2'>
          <input
            type='radio'
            id='Popularity'
            name='sort_by'
            value='Popularity'
          />
          <label className='ml-1' for='Popularity'>
            Popularity
          </label>
        </div>
      </div>
    </div>
  );
};

export { Filter };
