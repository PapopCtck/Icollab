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

import { fetchTrackProject,fetchAppliedProject } from './TrackProject';


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
  fetchTrackProject,
  fetchAppliedProject,
});

export default rootReducer;
