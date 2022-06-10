import axios from 'axios';

const getProducts = async () => {
  const getProductsBaseUrl = '/api/products';
  try {
    const {
      data: { products },
      status,
    } = await axios.get(getProductsBaseUrl);
    if (status >= 200 && status <= 300) return products;
    else {
      throw new Error("Couldn't get products");
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

const getCategories = async () => {
  const getCategoriesBaseUrl = '/api/categories';
  try {
    const {
      data: { categories },
      status,
    } = await axios.get(getCategoriesBaseUrl);
    if (status >= 200 && status <= 300) return categories;
    else {
      throw new Error("Couldn't get products categories");
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
export { getProducts, getCategories };
