import React from 'react';
import { CartItem } from '../../components';
import { useProduct } from '../../context';
import {
  getTotalCartItem,
  getTotalCartMRP,
  getTotalDiscount,
  getTotalPrice,
  getTotalDiscountPercentage,
} from '../../utils';
import './cart.scss';

const Cart = () => {
  const { productState, productDispatch } = useProduct();
  const { cart } = productState;
  return (
    <>
      <div className='cart-page-container theme-background'>
        <p className='text-xxl text-centered color-primary py-4  theme-background'>
          My Cart ({getTotalCartItem(productState.cart)} Items)
        </p>
        <div className='cart-page'>
          {cart?.length > 0 ? (
            <>
              <main className='cart-container'>
                {cart.map((cartItem) => (
                  <CartItem cartItem={cartItem} key={cartItem._id} />
                ))}
              </main>
              <div className='cart-price-container'>
                <p className='h3'>PRICE DETAILS</p>
                <hr />
                <div className='price-item mt-2'>
                  <p>Cart Total ({getTotalCartItem(productState.cart)} Item)</p>
                  <p>₹{getTotalCartMRP(productState.cart)}</p>
                </div>
                {/* <div className='price-item mt-2'>
                <p>Cart Total </p>
                <p>₹450</p>
              </div> */}
                <div className='price-item mt-2'>
                  <p>Cart Discount</p>
                  <p>- ₹{getTotalDiscount(productState.cart)}</p>
                </div>
                <div className='price-item my-2'>
                  <p>Delivery Charges</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className='price-item my-2'>
                  <p className='h3'>Total</p>
                  <p className='h3'>₹{getTotalPrice(productState.cart)}</p>
                </div>
                <hr />
                <button className='btn btn-primary mt-auto'>
                  <i className='fas fa-shopping-cart mr-1'></i> Place Order
                </button>
                <p className='text-centered mt-2'>
                  You are saving {getTotalDiscountPercentage(cart)}%
                </p>
              </div>
            </>
          ) : (
            <p className='text-centered mt-2 h1'>Cart Is Empty</p>
          )}
        </div>
      </div>
    </>
  );
};

export { Cart };
