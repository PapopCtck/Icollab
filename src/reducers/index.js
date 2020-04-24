import { combineReducers } from 'redux';

import { fetchRegister, fetchLogin } from './Authentication';

import {
  fetchGetProjects,
  fetchProjectsById,
  fetchSearchProjects,
  fetchGetProjectCategory,
  fetchCreateProject,
  fetchSearchUser,
  fetchReportProject,
  fetchApplyProject,
  fetchGetParticipants,
} from './Projects';

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
  fetchReportProject,
  fetchApplyProject,
  fetchGetParticipants,
});

export default rootReducer;
