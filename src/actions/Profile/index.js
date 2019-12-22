import { FNRedirect } from '../../helpers';

export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';

const host = process.env.REACT_APP_ICOLLAB_BACKEND;

export function fetchGetProfile(uid) {
  return async dispatch => {
    try {
      const res = await fetch(`${host}/v2/users/IdDataUser`, {
        method: 'POST',
        body: JSON.stringify(uid),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      });
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          type: GET_PROFILE_SUCCESS,
          data,
          status: res.status,
        });
      } else if (res.status === 400) {
        return dispatch({
          type: GET_PROFILE_FAILURE,
          data,
          status: res.status,
        });
      }
      else if (res.status === 500 || res.status === 502) {
        return FNRedirect('/500');
      }
      return dispatch({
        type: GET_PROFILE_FAILURE,
        data: null,
        status: res.status ? res.status : res,
      })
    } catch (err) {
      return dispatch({
        type: GET_PROFILE_FAILURE,
        data: null,
        status: err.status ? err.status : err,
      });
    }
  };
}
