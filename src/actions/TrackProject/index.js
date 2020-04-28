import { FNRedirect } from '../../helpers';

export const GET_TRACK_SUCCESS = 'GET_TRACK_SUCCESS';
export const GET_TRACK_FAILURE = 'GET_TRACK_FAILURE';

export const GET_APPLY_SUCCESS = 'GET_APPLY_SUCCESS';
export const GET_APPLY_FAILURE = 'GET_APPLY_FAILURE';

const host = process.env.REACT_APP_ICOLLAB_BACKEND;

export function fetchTrackOwnedProject(uid,token) {
  return async dispatch => {
    try {
      const res = await fetch(`${host}/v2/users/jecttrackowner`, {
        method: 'POST',
        body: JSON.stringify(uid),
        headers: new Headers({ 
          'Content-Type': 'application/json',
          'Authorization': token,
        }),
      });
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          type: GET_TRACK_SUCCESS,
          data,
          status: res.status,
        });
      } else if (res.status === 400) {
        return dispatch({
          type: GET_TRACK_FAILURE,
          data,
          status: res.status,
        });
      }
      else if (res.status === 500 || res.status === 502) {
        return FNRedirect('/500');
      }
      return dispatch({
        type: GET_TRACK_FAILURE,
        data: null,
        status: res.status ? res.status : res,
      })
    } catch (err) {
      return dispatch({
        type: GET_TRACK_FAILURE,
        data: null,
        status: err.status ? err.status : err,
      });
    }
  };
}

export function fetchAppliedProject(uid,token) {
  return async dispatch => {
    try {
      const res = await fetch(`${host}/v2/users/jecttrackpart`, {
        method: 'POST',
        body: JSON.stringify(uid),
        headers: new Headers({ 
          'Content-Type': 'application/json',
          'Authorization': token,
        }),
      });
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          type: GET_APPLY_SUCCESS,
          data,
          status: res.status,
        });
      } else if (res.status === 400) {
        return dispatch({
          type: GET_APPLY_FAILURE,
          data,
          status: res.status,
        });
      }
      else if (res.status === 500 || res.status === 502) {
        return FNRedirect('/500');
      }
      return dispatch({
        type: GET_APPLY_FAILURE,
        data: null,
        status: res.status ? res.status : res,
      })
    } catch (err) {
      return dispatch({
        type: GET_APPLY_FAILURE,
        data: null,
        status: err.status ? err.status : err,
      });
    }
  };
}

