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
  fetchEditProject,
} from './Projects';

import { fetchGetProfile, fetchEditProfile } from './Profile';

import { fetchTrackProject, fetchAppliedProject, fetchDeleteParticipant } from './TrackProject';


const rootReducer = combineReducers({
  fetchRegister,
  fetchLogin,
  fetchGetProjects,
  fetchProjectsById,
  fetchGetProfile,
  fetchEditProfile,
  fetchSearchProjects,
  fetchGetProjectCategory,
  fetchCreateProject,
  fetchSearchUser,
  fetchReportProject,
  fetchApplyProject,
  fetchGetParticipants,
  fetchTrackProject,
  fetchAppliedProject,
  fetchEditProject,
  fetchDeleteParticipant,
});

export default rootReducer;
