const checkIfItemInWishlist = (id, wishlist) => {
  const foundInWishlist = wishlist?.find((item) => item._id === id);
  return foundInWishlist ? true : false;
};

export { checkIfItemInWishlist };
