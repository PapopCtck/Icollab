import { combineReducers } from 'redux';

import { fetchRegister } from './Authentication';


const rootReducer = combineReducers({
  fetchRegister,
});

export default rootReducer;
