import React, { useState, useEffect } from 'react';
import './checkout.scss';
import { Address, makeToast } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { formatAddress } from '../../utils';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressList, setAddressList] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');
  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const productStore = useSelector((state) => state.productStore);
  const authStore = useSelector((state) => state.authStore);
  const navigate = useNavigate();

  useEffect(() => {
    if (!productStore.cartTotal) {
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
  };

  return (
    <>
      <div className='checkout-page theme-background'>
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
                <div className='address my-2'>
                  <input
                    type='radio'
                    id={address}
                    name='address'
                    value={address}
                    onChange={(event) => handleAddressInput(event.target.value)}
                  />
                  <label className='ml-1' htmlFor={address}>
                    {address}
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
          Amount to pay : ₹{productStore?.cartTotal}
        </div>
        <div>
          <button type='submit' className='btn btn-primary'>
            Proceed To Pay - ₹{productStore?.cartTotal}
          </button>
        </div>
      </div>
      <Address isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
};

export { Checkout };
