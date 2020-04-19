import { combineReducers } from 'redux';

import { fetchRegister, fetchLogin } from './Authentication';

import { fetchGetProjects, fetchProjectsById, fetchSearchProjects, fetchGetProjectCategory, fetchCreateProject } from './Projects';

import { fetchGetProfile } from './Profile';


const rootReducer = combineReducers({
  fetchRegister,
  fetchLogin,
  fetchGetProjects,
  fetchProjectsById,
  fetchGetProfile,
  fetchSearchProjects,
  fetchGetProjectCategory,
  fetchCreateProject,
});

export default rootReducer;
