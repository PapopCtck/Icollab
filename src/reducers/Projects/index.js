import {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  FETCH_PROJECT_ID_SUCCESS,
  FETCH_PROJECT_ID_FAILURE,
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
