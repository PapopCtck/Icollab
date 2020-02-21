import { combineReducers } from 'redux';

import { fetchRegister, fetchLogin } from './Authentication';

import { fetchGetProjects, fetchProjectsById, fetchSearchProjects } from './Projects';

import { fetchGetProfile } from './Profile';


const rootReducer = combineReducers({
  fetchRegister,
  fetchLogin,
  fetchGetProjects,
  fetchProjectsById,
  fetchGetProfile,
  fetchSearchProjects,
});

export default rootReducer;
