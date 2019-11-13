import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from '../../actions';

export function fetchRegister(state = {}, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return Object.assign({}, state, { ...action });
    case REGISTER_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
}

export function fetchLogin(state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { ...action });
    case LOGIN_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
}
