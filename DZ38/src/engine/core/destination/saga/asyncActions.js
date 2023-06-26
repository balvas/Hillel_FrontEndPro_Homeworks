// Parts
import { createAction } from '@reduxjs/toolkit';

const destinationAsyncAction = Object.freeze({
  getDestinationAsync: createAction('GET_DESTINATION_ASYNC'),
});

export const {
  getDestinationAsync,
} = destinationAsyncAction;
