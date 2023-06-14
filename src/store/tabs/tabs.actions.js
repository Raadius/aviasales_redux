import { createAction } from '../../utils/reducer.utils';

import { TABS_ACTION_TYPES } from './tabs.types';

export const setCheapSort = (boolean) => createAction(TABS_ACTION_TYPES.SET_CHEAPEST_TICKETS, boolean);
export const setFastSort = (boolean) => createAction(TABS_ACTION_TYPES.SET_FASTEST_TICKETS, boolean);
export const setOptimalSort = (boolean) => createAction(TABS_ACTION_TYPES.SET_OPTIMAL_TICKETS, boolean);
