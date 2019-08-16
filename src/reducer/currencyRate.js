import { CURRENCYRATE } from './../actions/ActionTypes';

const initialState = {
  loading: false,
	currencyRate: {},
	rates: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCYRATE.LOADING:
      return {
        ...state,
        loading: true
      };
    case CURRENCYRATE.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
				currencyRate: action.payload.data,
				rates: action.payload.data.rates
      };
    case CURRENCYRATE.FETCH_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
