import React from 'react';
import { connect } from 'react-redux';
import { isEmpty, isNil } from 'ramda';
import { requestQuoteStart } from '../actions';

const Quote = ({ quote, onRequest, quoteError, dispatch }) => {

  const loadingMsg = <h3>Loading...</h3>;
  const errorMsg = <h3 className="text-red">{quoteError}</h3>;
  const emptyMsg = <h3 className="text-blue">Nothing to show!</h3>
  let quoteContent;

  if (onRequest) {
    quoteContent = loadingMsg;
  } else if (quoteError) {
    quoteContent = errorMsg;
  } else if (isEmpty(quote) || isNil(quote)) {
    quoteContent = emptyMsg;
  } else {
    quoteContent = (
      <div className="max-w-md">
        <p>"{quote.quote}"</p>
        <br/>
        <span>- {quote.author}</span>
      </div>
    );
  }

  return(
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        {quoteContent}
        <button className="btn btn-blue mt-6" onClick={() => dispatch(requestQuoteStart())}>
          Refresh Quote
        </button>
      </div>
    </div>
  )
}

const mapStateToDispatch = (state) => ({
  quote: state.quotes.quote,
  onRequest: state.quotes.onRequest,
  quoteError: state.quotes.quoteError
})

export default connect(mapStateToDispatch)(Quote)