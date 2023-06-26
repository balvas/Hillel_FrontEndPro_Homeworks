// Parts
import { createAction } from '@reduxjs/toolkit';

const hotelsAsyncAction = Object.freeze({
  getHotelsAsync: createAction('GET_HOTELS_ASYNC'),
});

export const {
  getHotelsAsync,
} = hotelsAsyncAction;
