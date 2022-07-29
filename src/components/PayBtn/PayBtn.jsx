import React from 'react';
import './payBtn.scss';
import { useSelector, useDispatch } from 'react-redux';
import { makeToast } from '../';
import BOOKCULT_LOGO from '../../assets/logo.png';
import { addPaymentId, orderConfirmed } from '../../redux';
import { removeAllCart, addOrder } from '../../api';
import { useNavigate } from 'react-router-dom';

const loadScript = async () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const PayBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productStore = useSelector((state) => state.productStore);
  const authStore = useSelector((state) => state.authStore);
  const handlePayment = async () => {
    if (!productStore.cartSummary.selectedAddress) {
      makeToast('Please select an address first', 'error');
      return;
    }
    try {
      const isScriptLoaded = await loadScript();
      if (isScriptLoaded) {
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY,
          amount: productStore?.cartSummary?.cartTotal * 100,
          currency: 'INR',
          name: 'BookCult',
          description: 'Thank you for shopping with BookCult',
          image: { BOOKCULT_LOGO },
          handler: async (response) => {
            try {
              const data = await removeAllCart();
              const order = {
                cartTotal: productStore.cartSummary.cartTotal,
                totalCart: productStore.cart,
                selectedAddress: productStore.cartSummary.selectedAddress,
                paymentId: response.razorpay_payment_id,
                date: new Date().toDateString(),
              };
              const newData = await addOrder(order);
              dispatch(orderConfirmed(order));
              dispatch(addPaymentId(response.razorpay_payment_id));
              navigate('/orders');
              makeToast('Payment Successfull!', 'success');
            } catch (error) {
              console.log(error.message);
              makeToast('Payment Unsuccessful!', 'success');
            }
          },
          prefill: {
            name: `${productStore?.cartSummary.selectedAddress.name}`,
            email: '',
            contact: '',
          },
          theme: {
            color: '#2B51E1',
          },
        };
        const paymentObject = new window.Razorpay(options);
        const razorpayInstance = paymentObject.open();
        razorpayInstance.on('payment.failed', function (response) {
          console.error(response.error.code);
          makeToast('Payment Failed, Try Again!', 'error');
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button type='submit' className='btn btn-primary' onClick={handlePayment}>
      Proceed To Pay - ₹{productStore?.cartSummary?.cartTotal}
    </button>
  );
};

export { PayBtn };
