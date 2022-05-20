const checkIfItemInWishlist = (title, wishlist) => {
  const foundInWishlist = wishlist?.find((item) => item.title === title);
  return foundInWishlist ? true : false;
};

export { checkIfItemInWishlist };
