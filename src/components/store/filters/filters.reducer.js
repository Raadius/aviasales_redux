import { FILTERS_ACTION_TYPES } from './filters.type';

const INITIAL_STATE = {
  allTickets: true,
  directFlight: true,
  oneStop: true,
  twoStops: true,
  threeStops: true,
};

export const filtersReducer = (state = INITIAL_STATE, action = {}) => {
  const { type } = action;
  switch (type) {
    case FILTERS_ACTION_TYPES.SET_ALL_FLIGHT_FILTER:
      if (!state.allTickets) {
        return {
          allTickets: true,
          directFlight: true,
          oneStop: true,
          twoStops: true,
          threeStops: true,
        };
      }
      return {
        allTickets: !state.allTickets,
        directFlight: !state.directFlight,
        oneStop: !state.oneStop,
        twoStops: !state.twoStops,
        threeStops: !state.threeStops,
      };
    case FILTERS_ACTION_TYPES.SET_DIRECT_FLIGHT_FILTER:
      if (state.allTickets) {
        return {
          ...state,
          allTickets: false,
          directFlight: !state.directFlight,
        };
      } else if (state.oneStop && state.twoStops && state.threeStops && !state.allTickets) {
        return {
          ...state,
          allTickets: true,
          directFlight: !state.directFlight,
        };
      }
      return {
        ...state,
        directFlight: !state.directFlight,
      };
    case FILTERS_ACTION_TYPES.SET_ONE_STOP_FLIGHT_FILTER:
      if (state.allTickets) {
        return {
          ...state,
          allTickets: false,
          oneStop: !state.oneStop,
        };
      } else if (state.directFlight && state.twoStops && state.threeStops && !state.allTickets) {
        return {
          ...state,
          allTickets: true,
          oneStop: !state.oneStop,
        };
      }
      return {
        ...state,
        oneStop: !state.oneStop,
      };
    case FILTERS_ACTION_TYPES.SET_TWO_STOPS_FLIGHT_FILTER:
      if (state.allTickets) {
        return {
          ...state,
          allTickets: false,
          twoStops: !state.twoStops,
        };
      } else if (state.directFlight && state.oneStop && state.threeStops && !state.allTickets) {
        return {
          ...state,
          allTickets: true,
          twoStops: !state.twoStops,
        };
      }
      return {
        ...state,
        twoStops: !state.twoStops,
      };
    case FILTERS_ACTION_TYPES.SET_THREE_STOPS_FLIGHT_FILTER:
      if (state.allTickets) {
        return {
          ...state,
          allTickets: false,
          threeStops: !state.threeStops,
        };
      } else if (state.directFlight && state.oneStop && state.twoStops && !state.allTickets) {
        return {
          ...state,
          allTickets: true,
          threeStops: !state.threeStops,
        };
      }
      return {
        ...state,
        threeStops: !state.threeStops,
      };

    default:
      return state;
  }
};
