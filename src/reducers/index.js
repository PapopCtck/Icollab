import { combineReducers } from 'redux';

import { fetchRegister, fetchLogin } from './Authentication';


const rootReducer = combineReducers({
  fetchRegister,
  fetchLogin,
});

export default rootReducer;
