import React from 'react';
import './orders.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Error } from '../../components';

const Orders = () => {
  const productStore = useSelector((state) => state.productStore);
  return (
    <div className='order-page theme-background'>
      <p className='text-centered text-l py-2 mb-2'>
        {productStore.orders && (
          <p> Total Orders : {productStore?.orders?.length} </p>
        )}
      </p>
      {productStore.orders && productStore?.orders?.length === 0 && (
        <Error>
          <p className=' mt-2 h2'>No Orders! Browse Products</p>
          <Link to='/products'>
            <button className='btn btn-primary'>Go To Products</button>
          </Link>
        </Error>
      )}
      <div className='orders-container'>
        {productStore.orders &&
          productStore?.orders.map((order) => (
            <div className='cart-summary' key={order.paymentId}>
              <div className='cart-summary-item theme-body-background mt-0'>
                <p className='color-primary  mx-auto'>DATE - {order.date}</p>
              </div>
              <div className='cart-summary-item theme-body-background '>
                <p className='color-primary mx-auto'>
                  ORDER-ID - {order.paymentId}
                </p>
              </div>
              <div className='cart-summary-item theme-body-background '>
                <p className=' mx-auto text-centered'>
                  ORDERED AT - {order.selectedAddress.name},{' '}
                  {order.selectedAddress.address},{' '}
                  {order.selectedAddress.contact}
                </p>
              </div>
              <div className='cart-summary-item theme-body-background '>
                <p className='cart-summary-item-title  color-primary'>TITLE</p>
                <p className='cart-summary-item-quantity  color-primary'>
                  QUANTITY X PRICE
                </p>
                <p className='cart-summary-item-price  color-primary'>TOTAL</p>
              </div>
              {order.totalCart.map((cartItem) => (
                <div className='cart-summary-item theme-body-background '>
                  <p className='cart-summary-item-title'>{cartItem.title}</p>
                  <p className='cart-summary-item-quantity'>
                    {cartItem.qty} X ₹{cartItem.discountedPrice}
                  </p>
                  <p className='cart-summary-item-price'>
                    ₹{cartItem.qty * cartItem.discountedPrice}
                  </p>
                </div>
              ))}
              <div className='cart-summary-item theme-body-background '>
                <p className='cart-summary-item-title'>TOTAL</p>
                <p className='cart-summary-item-quantity'>₹{order.cartTotal}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export { Orders };
