import {
  GET_TRACK_SUCCESS,
  GET_TRACK_FAILURE,
  GET_APPLY_SUCCESS,
  GET_APPLY_FAILURE,
} from '../../actions';

export function fetchTrackProject(state = {}, action) {
  switch (action.type) {
    case GET_TRACK_SUCCESS:
      return Object.assign({}, state, { ...action });
    case GET_TRACK_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
}

export function fetchAppliedProject(state = {}, action) {
  switch (action.type) {
    case GET_APPLY_SUCCESS:
      return Object.assign({}, state, { ...action });
    case GET_APPLY_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
}

