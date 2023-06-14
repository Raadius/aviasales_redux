import { createAction } from '../../utils/reducer.utils';

import { FILTERS_ACTION_TYPES } from './filters.type';

export const setAllFilters = (boolean) => createAction(FILTERS_ACTION_TYPES.SET_ALL_FLIGHT_FILTER, boolean);
export const setDirectFilter = (boolean) => createAction(FILTERS_ACTION_TYPES.SET_DIRECT_FLIGHT_FILTER, boolean);
export const setOneStop = (boolean) => createAction(FILTERS_ACTION_TYPES.SET_ONE_STOP_FLIGHT_FILTER, boolean);
export const setTwoStops = (boolean) => createAction(FILTERS_ACTION_TYPES.SET_TWO_STOPS_FLIGHT_FILTER, boolean);
export const setThreeStops = (boolean) => createAction(FILTERS_ACTION_TYPES.SET_THREE_STOPS_FLIGHT_FILTER, boolean);
