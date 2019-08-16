import { combineReducers } from 'redux';
import { reducer as currencyRate } from './reducer/currencyRate';

export default combineReducers({
  currencyRate
});
