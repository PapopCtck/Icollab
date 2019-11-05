import { combineReducers } from 'redux';

import { register } from './Authentication';


const rootReducer = combineReducers({
  register,
});

export default rootReducer;
