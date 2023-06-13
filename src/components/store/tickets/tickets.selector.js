import { createSelector } from 'reselect';

export const selectTicketsReducer = (state) => state.tickets;

export const selectTickets = createSelector([selectTicketsReducer], (ticketsList) => ticketsList.tickets);
export const selectError = createSelector([selectTicketsReducer], (ticketsList) => ticketsList.error);
export const selectIsLoading = createSelector([selectTicketsReducer], (ticketsList) => ticketsList.isLoading);
