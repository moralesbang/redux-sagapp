import { createAction } from 'redux-actions';

export const requestQuoteStart = createAction('REQUEST_QUOTE_START');
export const requestQuoteSuccess = createAction('REQUEST_QUOTE_SUCESS');
export const requestQuoteFailure = createAction('REQUEST_QUOTE_FAILURE');