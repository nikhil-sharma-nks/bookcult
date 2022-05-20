const checkIfItemInCart = (title, cart) => {
  const foundInCart = cart?.find((item) => item.title === title);
  return foundInCart ? true : false;
};

export { checkIfItemInCart };
