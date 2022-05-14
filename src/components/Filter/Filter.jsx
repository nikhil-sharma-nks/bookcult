import React from 'react';
import './filter.scss';
import { useProduct } from '../../context';

const Filter = () => {
  const { productState, productDispatch } = useProduct();
  console.log({ productState });
  const { categories } = productState;
  const handleChange = (actionType, payload, isChecked) => {
    const finalPayload =
      actionType === 'CATEGORY' ? { [payload]: isChecked } : payload;
    productDispatch({
      type: actionType,
      payload: finalPayload,
    });
  };
  return (
    <div className='filter-container'>
      <div className='filter-clear-container'>
        <p className='text-l'>Filters</p>
        <div className='clear-button' onClick={() => handleChange('CLEAR')}>
          Clear
        </div>
      </div>
      <div className='price-range-container mt-4'>
        <p className='text-l'>Price</p>
        <div className='price-container'>
          <p>100</p>
          <p>500</p>
          <p>1000</p>
        </div>
        <input
          type='range'
          min='100'
          max='1000'
          step='20'
          onChange={(e) => handleChange('PRICE', e.target.value)}
          value={parseInt(productState.price)}
        />
      </div>
      <div className='category-container mt-4'>
        <p className='text-l'>Category</p>
        {Object.entries(categories).map((categoryItem) => {
          const [categoryName, isSelected] = categoryItem;
          return (
            <div className='mt-2'>
              <input
                type='checkbox'
                id={categoryName}
                name={categoryName}
                checked={isSelected}
                onChange={(e) =>
                  handleChange('CATEGORY', categoryName, e.target.checked)
                }
              />
              <label className='ml-1' htmlFor={categoryName}>
                {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
              </label>
            </div>
          );
        })}
      </div>
      <div className='rating-container mt-4'>
        <p className='text-l'>Rating</p>
        <div className='mt-2'>
          <input
            type='radio'
            id='4_AND_ABOVE'
            name='price'
            value='4_AND_ABOVE'
            onChange={() => handleChange('RATING', '4_AND_ABOVE')}
            checked={productState.rating === '4_AND_ABOVE'}
          />
          <label className='ml-1' htmlFor='4_AND_ABOVE'>
            4 Stars And Above
          </label>
        </div>
        <div className='mt-2'>
          <input
            type='radio'
            id='3_AND_ABOVE'
            name='price'
            value='3_AND_ABOVE'
            onChange={() => handleChange('RATING', '3_AND_ABOVE')}
            checked={productState.rating === '3_AND_ABOVE'}
          />
          <label className='ml-1' htmlFor='3_AND_ABOVE'>
            3 Stars And Above
          </label>
        </div>
        <div className='mt-2'>
          <input
            type='radio'
            id='2_AND_ABOVE'
            name='price'
            value='2_AND_ABOVE'
            onChange={() => handleChange('RATING', '2_AND_ABOVE')}
            checked={productState.rating === '2_AND_ABOVE'}
          />
          <label className='ml-1' htmlFor='2_AND_ABOVE'>
            2 Stars And Above
          </label>
        </div>
        <div className='mt-2'>
          <input
            type='radio'
            id='1_AND_ABOVE'
            name='price'
            value='1_AND_ABOVE'
            onChange={() => handleChange('RATING', '1_AND_ABOVE')}
            checked={productState.rating === '1_AND_ABOVE'}
          />
          <label className='ml-1' htmlFor='1_AND_ABOVE'>
            1 Star And Above
          </label>
        </div>
      </div>
      <div className='sort-container mt-4'>
        <p className='text-l'>Sort By</p>
        <div className='mt-2'>
          <input
            type='radio'
            id='LOW_TO_HIGH'
            name='sort_by'
            value='LOW_TO_HIGH'
            onChange={() => handleChange('SORT_BY', 'LOW_TO_HIGH')}
            checked={productState.sortBy === 'LOW_TO_HIGH'}
          />
          <label className='ml-1' for='LOW_TO_HIGH'>
            Price - Low To High
          </label>
        </div>
        <div className='mt-2'>
          <input
            type='radio'
            id='HIGH_TO_LOW'
            name='sort_by'
            value='HIGH_TO_LOW'
            onChange={() => handleChange('SORT_BY', 'HIGH_TO_LOW')}
            checked={productState.sortBy === 'HIGH_TO_LOW'}
          />
          <label className='ml-1' for='HIGH_TO_LOW'>
            Price - High To Low
          </label>
        </div>
        <div className='mt-2'>
          <input
            type='radio'
            id='NEWEST_FIRST'
            name='sort_by'
            value='NEWEST_FIRST'
            onChange={() => handleChange('SORT_BY', 'NEWEST_FIRST')}
            checked={productState.sortBy === 'NEWEST_FIRST'}
          />
          <label className='ml-1' for='NEWEST_FIRST'>
            Newest First
          </label>
        </div>
        <div className='mt-2'>
          <input
            type='radio'
            id='POPULARITY'
            name='sort_by'
            value='POPULARITY'
            onChange={() => handleChange('SORT_BY', 'POPULARITY')}
            checked={productState.sortBy === 'POPULARITY'}
          />
          <label className='ml-1' for='POPULARITY'>
            Popularity
          </label>
        </div>
      </div>
    </div>
  );
};

export { Filter };