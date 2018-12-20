import * as actions from '../actions';
import * as api from '../api';
import { call, put } from 'redux-saga/effects';
import { fetchQuote } from '../sagas';

describe('Sagas', () => {
  it('fetchQuote - fetches data from API and dispatches a success action', () => {
    const gen = fetchQuote();
  
    expect(gen.next().value)
      .toEqual(call(api.fetchQuote));

    expect(gen.next().value)
      .toEqual(put(actions.requestQuoteSuccess()));
  
    expect(gen.next())
      .toEqual({ done: true, value: undefined });
  });
});