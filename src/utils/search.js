const searchProducts = (query, products) => {
  if (query === '') return products;
  console.log('products', products);
  console.log('query', query);
  const searchProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.author.toLowerCase().includes(query.toLowerCase())
  );
  console.log('searchProducts', searchProducts);
  return searchProducts;
};

export { searchProducts };
