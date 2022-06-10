const checkIfItemInCart = (id, cart) => {
  const foundInCart = cart?.find((item) => item._id === id);
  return foundInCart ? true : false;
};

const getTotalCartItem = (cart) => {
  const totalItems = cart.reduce((prev, current) => prev + current.qty, 0);
  return totalItems;
};

const getTotalCartMRP = (cart) => {
  const totalItems = cart.reduce(
    (prev, current) => prev + current.qty * current.price,
    0
  );
  return totalItems;
};
const getTotalDiscount = (cart) => {
  const totalItems = cart.reduce(
    (prev, current) => prev + current.qty * current.discountedAmount,
    0
  );
  return totalItems;
};
const getTotalPrice = (cart) => {
  const totalItems = cart.reduce(
    (prev, current) => prev + current.qty * current.discountedPrice,
    0
  );
  return totalItems;
};
const getTotalDiscountPercentage = (cart) => {
  const price = getTotalCartMRP(cart);
  const discount = getTotalDiscount(cart);
  return Math.floor((discount / price) * 100);
};

export {
  checkIfItemInCart,
  getTotalCartItem,
  getTotalCartMRP,
  getTotalDiscount,
  getTotalPrice,
  getTotalDiscountPercentage,
};
