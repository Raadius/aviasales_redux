import { TABS_ACTION_TYPES } from './tabs.types';

const INITIAL_STATE = {
  cheapSort: true,
  fastSort: false,
  optimalSort: false,
};

export const tabsReducer = (state = INITIAL_STATE, action = {}) => {
  const { type } = action;
  switch (type) {
    case TABS_ACTION_TYPES.SET_CHEAPEST_TICKETS:
      return {
        cheapSort: true,
        fastSort: false,
        optimalSort: false,
      };
    case TABS_ACTION_TYPES.SET_FASTEST_TICKETS:
      return {
        cheapSort: false,
        fastSort: true,
        optimalSort: false,
      };

    case TABS_ACTION_TYPES.SET_OPTIMAL_TICKETS:
      return {
        cheapSort: false,
        fastSort: false,
        optimalSort: true,
      };

    default:
      return state;
  }
};
