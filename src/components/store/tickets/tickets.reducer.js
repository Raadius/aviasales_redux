import { TICKETS_ACTION_TYPES } from './tickets.type.js';

const TICKETS_INITIAL_STATE = {
  tickets: [],
  isLoading: false,
  error: null,
};

export const ticketsReducer = (state = TICKETS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case TICKETS_ACTION_TYPES.FETCH_TICKETS_START:
      return {
        ...state,
        isLoading: true,
      };
    case TICKETS_ACTION_TYPES.FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: [...state.tickets, ...payload],
        isLoading: true,
      };
    case TICKETS_ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case TICKETS_ACTION_TYPES.FETCH_TICKETS_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
