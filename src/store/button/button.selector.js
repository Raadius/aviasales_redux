import { createSelector } from 'reselect';

export const selectedButtonsReducer = (state) => state.quantity;

export const selectQuantity = createSelector([selectedButtonsReducer], (quantitySlice) => quantitySlice);
