import React from 'react';
import { CartItem } from '../../components';
import { useProduct } from '../../context';
import './cart.scss';

const Cart = () => {
  const { productState, productDispatch } = useProduct();
  const { cart } = productState;
  return (
    <>
      <p className='text-xxl text-centered color-primary my-4'>My Cart</p>
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
                <p>Price (1 Item)</p>
                <p>₹320</p>
              </div>
              <div className='price-item mt-2'>
                <p>Original Price </p>
                <p>₹450</p>
              </div>
              <div className='price-item mt-2'>
                <p>Discount</p>
                <p>- ₹130</p>
              </div>
              <div className='price-item my-2'>
                <p>Delivery Charges</p>
                <p>Free</p>
              </div>
              <hr />
              <div className='price-item my-2'>
                <p className='h3'>Total</p>
                <p className='h3'>₹320</p>
              </div>
              <hr />
              <button className='btn btn-primary mt-auto'>
                <i className='fas fa-shopping-cart mr-1'></i> Place Order
              </button>
            </div>
          </>
        ) : (
          'Cart Is Empty'
        )}
      </div>
    </>
  );
};

export { Cart };
