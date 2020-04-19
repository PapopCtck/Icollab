import {
  //register
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  fetchRegister,
  //login
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  fetchLogin,
} from './Authentication';

import {
  //getproject
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  fetchGetProjects,
  //fetchById
  FETCH_PROJECT_ID_SUCCESS,
  FETCH_PROJECT_ID_FAILURE,
  fetchProjectsById,
  //searchProject
  fetchSearchProjects,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_FAILURE,
  //fetchPorjectCategory
  fetchGetProjectCategory,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
  //fetchCreateProject
  fetchCreateProject,
  FETCH_CREATE_PROJ_SUCCESS,
  FETCH_CREATE_PROJ_FAILURE,
} from './Projects';

import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  fetchGetProfile,
} from './Profile';


export {
  //register
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  fetchRegister,
  //login
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  fetchLogin,
  //getProject
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  fetchGetProjects,
  //fetchprojectid
  FETCH_PROJECT_ID_SUCCESS,
  FETCH_PROJECT_ID_FAILURE,
  fetchProjectsById,
  //getprofile
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  fetchGetProfile,
  //searchProject
  fetchSearchProjects,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_FAILURE,
  //fetchProjectCategory
  fetchGetProjectCategory,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
  //fetchCreateProject
  fetchCreateProject,
  FETCH_CREATE_PROJ_SUCCESS,
  FETCH_CREATE_PROJ_FAILURE,
};
