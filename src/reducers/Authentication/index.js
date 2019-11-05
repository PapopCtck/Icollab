import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../../actions';

export function register(state = {}, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return Object.assign({}, state, { ...action });
    case REGISTER_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
}
