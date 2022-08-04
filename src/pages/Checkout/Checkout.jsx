import React, { useState, useEffect } from 'react';
import './checkout.scss';
import { Address, makeToast, PayBtn } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { formatAddress } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { addSelectedAddress } from '../../redux';

const Checkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressList, setAddressList] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');
  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const productStore = useSelector((state) => state.productStore);
  const authStore = useSelector((state) => state.authStore);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!productStore?.cartSummary?.cartTotal) {
      navigate('/cart');
      makeToast('Please Order From Cart To Move To Checkout', 'error');
    }
  }, []);
  useEffect(() => {
    const modifiedAddressList = formatAddress(authStore.user.addressList);
    setAddressList(modifiedAddressList);
  }, [authStore]);
  const handleAddressInput = (value) => {
    setSelectedAddress(value);
    dispatch(addSelectedAddress(value));
  };

  return (
    <>
      <div className='checkout-page theme-background pb-5'>
        <div className='cart-summary mt-4'>
          <div className='cart-summary-item theme-body-background mt-0'>
            <p className='cart-summary-item-title  color-primary'>TITLE</p>
            <p className='cart-summary-item-quantity  color-primary'>
              QUANTITY X PRICE
            </p>
            <p className='cart-summary-item-price  color-primary'>TOTAL</p>
          </div>
          {productStore.cart.map((cartItem) => (
            <div
              className='cart-summary-item theme-body-background'
              key={cartItem._id}
            >
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
            <p className='cart-summary-item-quantity'>
              ₹{productStore?.cartTotal}
            </p>
          </div>
        </div>
        <div className='address-container mt-5 theme-body-background'>
          <div className='address-container-header'>
            <p className='text-l'>Select Address</p>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={toggleModal}
            >
              Add Address
            </button>
          </div>

          <div className='address-list'>
            {addressList.length > 0 ? (
              addressList.map((address) => (
                <div
                  className='address my-2'
                  key={`${address.name}${address.phone}`}
                >
                  <input
                    type='radio'
                    id={address.name}
                    name='address'
                    value={address.name}
                    onChange={(event) => handleAddressInput(address)}
                  />
                  <label className='ml-1' htmlFor={address.name}>
                    Name - {address.name}
                    <p>{address.address}</p>
                    <p>Contact - {address.contact}</p>
                  </label>
                </div>
              ))
            ) : (
              <p className='text-l text-centered my-4'>
                No Address Added, Please Add One
              </p>
            )}
          </div>
        </div>
        <div className='price text-xl'>
          Amount to pay : ₹{productStore?.cartSummary?.cartTotal}
        </div>
        <div>
          <PayBtn />
        </div>
      </div>
      <Address isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
};

export { Checkout };
