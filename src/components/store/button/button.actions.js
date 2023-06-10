import { createAction } from '../../utils/reducer.utils';

import { SET_BUTTON_ACTION } from './button.types';

export const setButtonAction = (quantity) => createAction(SET_BUTTON_ACTION.ADD_FIVE_TICKETS, quantity);
