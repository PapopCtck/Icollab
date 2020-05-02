import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_EDIT_PROFILE_SUCCESS,
  GET_EDIT_PROFILE_FAILURE,
} from '../../actions';

export function fetchGetProfile(state = {}, action) {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return Object.assign({}, state, { ...action });
    case GET_PROFILE_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
}

export function fetchEditProfile(state = {}, action) {
  switch (action.type) {
    case GET_EDIT_PROFILE_SUCCESS:
      return Object.assign({}, state, { ...action });
    case GET_EDIT_PROFILE_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
}
