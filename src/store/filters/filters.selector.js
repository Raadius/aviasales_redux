import { createSelector } from 'reselect';

export const selectedFiltersReducer = (state) => state.filters;

export const selectFilters = createSelector([selectedFiltersReducer], (filterSlice) => filterSlice);
