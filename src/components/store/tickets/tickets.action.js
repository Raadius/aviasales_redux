/* eslint-disable no-undef */
import { createAction } from '../../utils/reducer.utils';
import AviasalesService from '../../api-services/api-service.js';

import { TICKETS_ACTION_TYPES } from './tickets.type.js';

export const fetchTicketsStart = () => createAction(TICKETS_ACTION_TYPES.FETCH_TICKETS_START);
export const fetchTicketsSuccess = (ticketList) => createAction(TICKETS_ACTION_TYPES.FETCH_TICKETS_SUCCESS, ticketList);

export const fetchTicketsFailure = (error) => createAction(TICKETS_ACTION_TYPES.FETCH_TICKETS_FAILURE, error);
export const setLoading = () => createAction(TICKETS_ACTION_TYPES.SET_LOADING);

const aviaApi = new AviasalesService();
export const fetchTicketsAsync = () => async (dispatch) => {
  dispatch(fetchTicketsStart());
  try {
    if (aviaApi._searchId === null) {
      await aviaApi.getSearchId();
    }
    const result = await aviaApi.getTickets();
    const { tickets, stop } = result;
    dispatch(fetchTicketsSuccess(tickets));

    if (stop) {
      dispatch(setLoading());
    }

    if (!stop) {
      dispatch(fetchTicketsAsync());
    }
  } catch (error) {
    console.log(error.message);
    if (error.code === 'ERR_BAD_RESPONSE') {
      dispatch(fetchTicketsAsync());
    } else {
      dispatch(fetchTicketsFailure(error));
    }
  }
};
