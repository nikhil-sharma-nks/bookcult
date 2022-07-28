import React, { useState, useEffect } from 'react';
import './address.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addAddress } from '../../api';
import { updateUser } from '../../redux';
import { makeToast } from '../../components';
import { useNavigate } from 'react-router-dom';
const Address = ({ isModalOpen, toggleModal }) => {
  const authStore = useSelector((state) => state.authStore);
  const productStore = useSelector((state) => state.productStore);
  const dispatch = useDispatch();
  const [addressInput, setAddressInput] = useState({
    name: '',
    street: '',
    phone: '',
    city: '',
    state: '',
    pincode: '',
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setAddressInput({
      ...addressInput,
      [name]: value,
    });
  };

  const handleAddressSubmit = async (event) => {
    event.preventDefault();
    try {
      const userWithUpdatedAddress = await addAddress(addressInput);
      dispatch(updateUser(userWithUpdatedAddress));
      makeToast('Added Address', 'success');
      setAddressInput({
        name: '',
        street: '',
        phone: '',
        city: '',
        state: '',
        pincode: '',
      });
      toggleModal();
    } catch (error) {
      console.log(error);
      makeToast('Error Adding Address', 'error');
    }
  };
  return (
    <>
      {isModalOpen && (
        <div className='address-modal-container'>
          <div className='address-modal'>
            <form
              className='form-group theme-body-background'
              onSubmit={(event) => handleAddressSubmit(event)}
            >
              <p className='text-xl text-centered color-primary'>Add Address</p>
              <label htmlFor='address-name' className='form-label'>
                Name
              </label>
              <input
                type='text'
                className='form-control'
                id='address-name'
                name='name'
                placeholder='Enter your name'
                onChange={inputChangeHandler}
                value={addressInput.name}
                required
              />
              <label htmlFor='phone_number' className='form-label'>
                Phone Number
              </label>
              <input
                type='tel'
                className='form-control'
                id='phone_number'
                placeholder='Enter your phone number'
                name='phone'
                onChange={inputChangeHandler}
                value={addressInput.phone}
                required
              />
              <label htmlFor='street_name' className='form-label'>
                Street
              </label>
              <input
                type='text'
                className='form-control'
                id='street_name'
                name='street'
                placeholder='Enter your street, colony address'
                onChange={inputChangeHandler}
                value={addressInput.street}
                required
              />

              <label htmlFor='city' className='form-label'>
                City
              </label>
              <input
                type='text'
                className='form-control'
                id='city'
                placeholder='Enter your city'
                name='city'
                onChange={inputChangeHandler}
                value={addressInput.city}
                required
              />
              <label htmlFor='state' className='form-label'>
                State
              </label>
              <input
                type='text'
                className='form-control'
                id='state'
                placeholder='Enter your state'
                name='state'
                onChange={inputChangeHandler}
                value={addressInput.state}
                required
              />
              <label htmlFor='pin_code' className='form-label'>
                Pin Code
              </label>
              <input
                type='number'
                className='form-control'
                id='pin_code'
                placeholder='Enter Your Pincode'
                name='pincode'
                onChange={inputChangeHandler}
                value={addressInput.pincode}
                required
              />
              <div className='btn-container mt-3'>
                <button type='submit' className='btn btn-primary'>
                  Add Address
                </button>
                <button className='btn btn-error' onClick={() => toggleModal()}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export { Address };
