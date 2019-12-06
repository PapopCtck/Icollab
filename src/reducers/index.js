import { combineReducers } from 'redux';

import { fetchRegister, fetchLogin } from './Authentication';

import { fetchGetProjects, fetchProjectsById } from './Projects';


const rootReducer = combineReducers({
  fetchRegister,
  fetchLogin,
  fetchGetProjects,
  fetchProjectsById,
});

export default rootReducer;
