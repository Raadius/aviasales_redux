import { createSelector } from 'reselect';

export const selectedTabsReducer = (state) => state.tabs;

export const selectedTabs = createSelector([selectedTabsReducer], (tabSlice) => tabSlice);
