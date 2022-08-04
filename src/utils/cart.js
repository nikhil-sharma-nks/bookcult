const checkIfItemInCart = (id, cart) => {
  const foundInCart = cart?.find((item) => item._id === id);
  return foundInCart ? true : false;
};

const getTotalCartItem = (cart) => {
  if (!cart) return 0;
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

const formatAddress = (addressList) => {
  const modifiedAddressList = addressList.map((address) => ({
    name: address.name,
    address: `${address.street}, ${address.city}, ${address.state}, ${address.pincode}`,
    contact: address.phone,
  }));
  return modifiedAddressList;
};

export {
  checkIfItemInCart,
  getTotalCartItem,
  getTotalCartMRP,
  getTotalDiscount,
  getTotalPrice,
  getTotalDiscountPercentage,
  formatAddress,
};
