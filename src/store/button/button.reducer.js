import { SET_BUTTON_ACTION } from './button.types';

const INITIAL_STATE = {
  quantity: 5,
};

export const buttonReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SET_BUTTON_ACTION.ADD_FIVE_TICKETS:
      return {
        quantity: state.quantity + payload,
      };

    default:
      return state;
  }
};
