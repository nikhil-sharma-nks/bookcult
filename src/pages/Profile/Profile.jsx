import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './profile.scss';
import { Orders } from '../';

const Profile = () => {
  const authStore = useSelector((state) => state.authStore);
  return (
    <div className='profile-page theme-background py-4'>
      <div className='user-info-container '>
        <div className='user-info-item'>
          <p>First Name</p>
          <p>{authStore.user.firstName}</p>
        </div>
        <div className='user-info-item'>
          <p>Last Name</p>
          <p>{authStore.user.lastName}</p>
        </div>
        <div className='user-info-item'>
          <p>Email</p>
          <p>{authStore.user.email}</p>
        </div>
        <div className='user-info-item'>
          <p>Account Created At</p>
          <p>{authStore.user.createdAt.slice(0, 10)}</p>
        </div>
      </div>
      <Orders />
    </div>
  );
};

export { Profile };
