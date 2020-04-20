import { combineReducers } from 'redux';

import { fetchRegister, fetchLogin } from './Authentication';

import { fetchGetProjects, fetchProjectsById, fetchSearchProjects, fetchGetProjectCategory, fetchCreateProject, fetchSearchUser } from './Projects';

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
  fetchSearchUser,
});

export default rootReducer;
