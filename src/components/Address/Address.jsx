import React, { useState } from 'react';
import './address.scss';
import { useDispatch } from 'react-redux';
import { addAddress } from '../../api';
import { updateUser } from '../../redux';
import { makeToast } from '../../components';
const Address = ({ isModalOpen, toggleModal }) => {
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
      if (userWithUpdatedAddress) {
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
      } else {
        showErrorMessage();
      }
    } catch (error) {
      console.log(error);
      makeToast('Error Adding Address', 'error');
    }
  };

  const demoAddress = [
    {
      name: 'Virat Kholi',
      street: 'legend comeback road',
      phone: '8877553311',
      city: 'Delhi',
      state: 'Delhi',
      pincode: '110068',
    },
    {
      name: 'MS Dhoni',
      street: 'great God building',
      phone: '777477774',
      city: 'Ranchi',
      state: 'Jharkhand',
      pincode: '568833',
    },
    {
      name: 'Rohit',
      street: '200 ton road',
      phone: '995599227',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '110068',
    },
  ];

  const handleAddDummyData = () => {
    const randomDemoInput = Math.floor(Math.random() * demoAddress.length);
    console.log('randomDemoInput', randomDemoInput);
    setAddressInput({ ...demoAddress[randomDemoInput] });
  };

  const showErrorMessage = () => {
    makeToast(`Action Failed, See Log For It's Reason`, 'error');
    console.log(
      "This function was failed because, you might have refreshed the page somewhere, since this is a frontend application which doesn't have the real backend, it uses mock backend mockbee and mirajeJs which on reloading srves entire mock backend again instead of persisting. So you might want to logout, reload and log in again with test credentials or signup again and use the features of this app without reloading"
    );
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
              <div className='btn-container mt-3'>
                <button
                  type='button'
                  className='btn btn-primary-outlined mx-auto'
                  onClick={handleAddDummyData}
                >
                  Add Demo Address
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
