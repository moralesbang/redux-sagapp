import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const initialState = {
  quote: {},
  quoteError: "",
  onRequest: false
};

const quotes = handleActions({
  REQUEST_QUOTE_START: (state) => ({...state, onRequest: true}),
  REQUEST_QUOTE_SUCESS: (state, action) => {
    return {...state, quote: action.payload, onRequest: false}
  },
  REQUEST_QUOTE_FAILURE: (state, action) => {
    return {...state, quoteError: action.payload, onRequest: false}
  }
}, initialState)

export const rootReducer = combineReducers({
  quotes
})