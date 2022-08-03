const searchProducts = (query, products) => {
  if (query === '') return products;
  const searchProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.author.toLowerCase().includes(query.toLowerCase())
  );
  return searchProducts;
};

export { searchProducts };
