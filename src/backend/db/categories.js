import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'fiction',
    imgAltText: 'fiction category banner',
  },
  {
    _id: uuid(),
    categoryName: 'non-fiction',
    imgAltText: 'non-fiction category banner',
  },
  {
    _id: uuid(),
    categoryName: 'self-help',
    imgAltText: 'self-help category banner',
  },
  {
    _id: uuid(),
    categoryName: 'biography',
    imgAltText: 'biography category banner',
  },
];
