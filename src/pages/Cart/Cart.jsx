import React from 'react';
import { CartItem, Error } from '../../components';
import {
  getTotalCartItem,
  getTotalCartMRP,
  getTotalDiscount,
  getTotalPrice,
  getTotalDiscountPercentage,
} from '../../utils';
import './cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { addCartTotal } from '../../redux';

const Cart = () => {
  const productStore = useSelector((state) => state.productStore);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = productStore;
  return (
    <>
      <div className='cart-page-container theme-background pb-5'>
        <p className='text-xxl text-centered color-primary py-4  theme-background'>
          My Cart ({getTotalCartItem(cart)}{' '}
          {getTotalCartItem(cart) === 0 || getTotalCartItem(cart) === 1
            ? 'Item'
            : 'Items'}
          )
        </p>
        <div className='cart-page'>
          {cart?.length > 0 ? (
            <>
              <main className='cart-container'>
                {[...new Set(cart)].map((cartItem) => (
                  <CartItem cartItem={cartItem} key={cartItem._id} />
                ))}
              </main>
              <div className='cart-price-container'>
                <p className='h3'>PRICE DETAILS</p>
                <hr />
                <div className='price-item mt-2'>
                  <p>Cart Total ({getTotalCartItem(cart)} Item)</p>
                  <p>₹{getTotalCartMRP(cart)}</p>
                </div>
                <div className='price-item mt-2'>
                  <p>Cart Discount</p>
                  <p>- ₹{getTotalDiscount(cart)}</p>
                </div>
                <div className='price-item my-2'>
                  <p>Delivery Charges</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className='price-item my-2'>
                  <p className='h3'>Total</p>
                  <p className='h3'>₹{getTotalPrice(cart)}</p>
                </div>
                <hr />
                <button
                  className='btn btn-primary mt-auto'
                  onClick={() => {
                    dispatch(addCartTotal(getTotalPrice(cart)));
                    navigate('/checkout');
                  }}
                >
                  <i className='fas fa-shopping-cart mr-1'></i> Place Order
                </button>
                <p className='text-centered mt-2'>
                  You are saving {getTotalDiscountPercentage(cart)}%
                </p>
              </div>
            </>
          ) : (
            ''
          )}
        </div>
        {cart?.length === 0 && (
          <Error>
            <p className=' mt-2 h2'>Cart Is Empty</p>
            <Link to='/products'>
              <button className='btn btn-primary'>Go To Products</button>
            </Link>
          </Error>
        )}
      </div>
    </>
  );
};

export { Cart };
