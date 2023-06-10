import { combineReducers } from 'redux';

import { filtersReducer } from './filters/filters.reducer';
import { tabsReducer } from './tabs/tabs.reducer';
import { buttonReducer } from './button/button.reducer';

export const rootReducer = combineReducers({
  //   tickets: ticketsReducer,
  filters: filtersReducer,
  tabs: tabsReducer,
  quantity: buttonReducer,
});
