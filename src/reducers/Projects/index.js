import {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
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

