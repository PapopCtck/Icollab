import {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  FETCH_PROJECT_ID_SUCCESS,
  FETCH_PROJECT_ID_FAILURE,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_FAILURE,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
  FETCH_CREATE_PROJ_SUCCESS,
  FETCH_CREATE_PROJ_FAILURE,
  FETCH_SEARCH_USER_SUCCESS,
  FETCH_SEARCH_USER_FAILURE,
  FETCH_APPLY_SUCCESS,
  FETCH_APPLY_FAILURE,
  FETCH_REPORT_SUCCESS,
  FETCH_REPORT_FAILURE,
  FETCH_PARTICIPANTS_SUCCESS,
  FETCH_PARTICIPANTS_FAILURE,
} from '../../actions';

export function fetchGetProjects(state = {}, action) {
  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:
      return Object.assign({}, state, { ...action });
    case FETCH_PROJECTS_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
}

export function fetchProjectsById(state = {}, action) {
  switch (action.type) {
    case FETCH_PROJECT_ID_SUCCESS:
      return Object.assign({}, state, { ...action });
    case FETCH_PROJECT_ID_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
}

export function fetchSearchProjects(state = {}, action) {
  switch (action.type) {
    case FETCH_SEARCH_SUCCESS:
      return Object.assign({}, state, { ...action });
    case FETCH_SEARCH_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
}

export function fetchGetProjectCategory(state = {}, action) {
  switch (action.type) {
    case FETCH_CATEGORY_SUCCESS:
      return Object.assign({}, state, { ...action });
    case FETCH_CATEGORY_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
}

export function fetchCreateProject(state = {}, action) {
  switch (action.type) {
    case FETCH_CREATE_PROJ_SUCCESS:
      return Object.assign({}, state, { ...action });
    case FETCH_CREATE_PROJ_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
}

export function fetchSearchUser(state = {}, action) {
  switch (action.type) {
    case FETCH_SEARCH_USER_SUCCESS:
      return Object.assign({}, state, { ...action });
    case FETCH_SEARCH_USER_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
}

export function fetchReportProject(state = {}, action) {
  switch (action.type) {
    case FETCH_REPORT_SUCCESS:
      return Object.assign({}, state, { ...action });
    case FETCH_REPORT_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
}

export function fetchApplyProject(state = {}, action) {
  switch (action.type) {
    case FETCH_APPLY_SUCCESS:
      return Object.assign({}, state, { ...action });
    case FETCH_APPLY_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
}

export function fetchGetParticipants(state = {}, action) {
  switch (action.type) {
    case FETCH_PARTICIPANTS_SUCCESS:
      return Object.assign({}, state, { ...action });
    case FETCH_PARTICIPANTS_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
}
