import { v4 as uuid } from 'uuid';
import { Response } from 'miragejs';
import { requiresAuth, formatDate } from '../utils/authUtils';
const sign = require('jwt-encode');
/**
 * All the routes related to Auth are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles user signups.
 * send POST Request at /api/auth/signup
 * body contains {firstName, lastName, email, password}
 * */

export const signupHandler = function (schema, request) {
  const { email, password, ...rest } = JSON.parse(request.requestBody);
  try {
    // check if email already exists
    const foundUser = schema.users.findBy({ email });
    if (foundUser) {
      return new Response(
        422,
        {},
        {
          errors: ['Unprocessable Entity. Email Already Exists.'],
        }
      );
    }
    const _id = uuid();
    const newUser = {
      _id,
      email,
      password,
      createdAt: formatDate(),
      updatedAt: formatDate(),
      ...rest,
      cart: [],
      wishlist: [],
      addressList: [],
      orders: [],
      phoneNo: '',
    };
    const createdUser = schema.users.create(newUser);
    const encodedToken = sign({ _id, email }, process.env.REACT_APP_JWT_SECRET);
    return new Response(201, {}, { createdUser, encodedToken });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles user login.
 * send POST Request at /api/auth/login
 * body contains {email, password}
 * */

export const loginHandler = function (schema, request) {
  const { email, password } = JSON.parse(request.requestBody);
  try {
    const foundUser = schema.users.findBy({ email });
    if (!foundUser) {
      return new Response(
        404,
        {},
        { errors: ['The email you entered is not Registered. Not Found error'] }
      );
    }
    if (password === foundUser.password) {
      const encodedToken = sign(
        { _id: foundUser._id, email },
        process.env.REACT_APP_JWT_SECRET
      );
      foundUser.password = undefined;
      return new Response(200, {}, { foundUser, encodedToken });
    }
    return new Response(
      401,
      {},
      {
        errors: [
          'The credentials you entered are invalid. Unauthorized access error.',
        ],
      }
    );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

export const addPhoneNumber = function (schema, request) {
  const { phoneNo } = JSON.parse(request.requestBody);
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ['The email you entered is not Registered. Not Found error'],
        }
      );
    }
    this.db.users.update({ _id: userId }, { phoneNo: phoneNo });
    const user = schema.users.findBy({ _id: userId });
    return new Response(200, {}, { user });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

export const addAddress = function (schema, request) {
  const { address } = JSON.parse(request.requestBody);
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ['The email you entered is not Registered. Not Found error'],
        }
      );
    }
    const user = schema.users.findBy({ _id: userId });
    this.db.users.update(
      { _id: userId },
      { addressList: [...user.addressList, address] }
    );
    const updatedUser = schema.users.findBy({ _id: userId });
    return new Response(200, {}, { updatedUser });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

export const addToOrders = function (schema, request) {
  const { order } = JSON.parse(request.requestBody);
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ['The email you entered is not Registered. Not Found error'],
        }
      );
    }
    const user = schema.users.findBy({ _id: userId });
    this.db.users.update({ _id: userId }, { orders: [...user.orders, order] });
    const updatedUser = schema.users.findBy({ _id: userId });
    return new Response(200, {}, { updatedUser });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
