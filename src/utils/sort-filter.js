const filterByPrice = (price, products) => {
  if (price === '') return products;
  return products.filter((product) => product.discountedPrice <= price);
};

const filterByCategory = (categories, products) => {
  let filterByCategoryProducts = [];
  Object.entries(categories).forEach((categoryItem) => {
    const [categoryName, isSelected] = categoryItem;
    if (isSelected) {
      const selectedProducts = products.filter((product) =>
        product.categoryName.find((name) => name === categoryName)
      );
      filterByCategoryProducts = [
        ...filterByCategoryProducts,
        ...selectedProducts,
      ];
    }
  });
  return filterByCategoryProducts.length !== 0
    ? filterByCategoryProducts
    : products;
};

const sortByFilter = (filter, products) => {
  switch (filter) {
    case '': {
      return products;
    }
    case 'LOW_TO_HIGH': {
      return products.sort((a, b) => a.discountedPrice - b.discountedPrice);
    }
    case 'HIGH_TO_LOW': {
      return products.sort((a, b) => b.discountedPrice - a.discountedPrice);
    }
    case 'NEWEST_FIRST': {
      const newProducts = products.filter((product) => product.tag === 'new');
      return [...new Set([...newProducts, ...products])];
    }
    case 'POPULARITY': {
      const popularProducts = products.filter(
        (product) => product.tag === 'bestseller'
      );
      return [...new Set([...popularProducts, ...products])];
    }
    default:
      return products;
  }
};

const filterByRating = (rating, products) => {
  if (rating === '') return products;
  switch (rating) {
    case '4_AND_ABOVE': {
      return products.filter((product) => product.rating >= 4);
    }
    case '3_AND_ABOVE': {
      return products.filter((product) => product.rating >= 3);
    }
    case '2_AND_ABOVE': {
      return products.filter((product) => product.rating >= 2);
    }
    case '1_AND_ABOVE': {
      return products.filter((product) => product.rating >= 1);
    }
    default:
      return products;
  }
};

export { filterByPrice, filterByCategory, sortByFilter, filterByRating };
