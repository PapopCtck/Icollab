import { FNRedirect } from '../../helpers';

export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';

export const FETCH_PROJECT_ID_SUCCESS = 'FETCH_PROJECT_ID_SUCCESS';
export const FETCH_PROJECT_ID_FAILURE = 'FETCH_PROJECT_ID_FAILURE';

export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const FETCH_SEARCH_FAILURE = 'FETCH_SEARCH_FAILURE';

const host = process.env.REACT_APP_ICOLLAB_BACKEND;

export function fetchGetProjects() {
  return async dispatch => {
    try {
      const res = await fetch(`${host}/v2/users/getData`, {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json' }),
      });
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          type: FETCH_PROJECTS_SUCCESS,
          data,
          status: res.status,
        });
      } else if (res.status === 400) {
        return dispatch({
          type: FETCH_PROJECTS_FAILURE,
          data,
          status: res.status,
        });
      }
      else if (res.status === 500 || res.status === 502) {
        return FNRedirect('/500');
      }
      return dispatch({
        type: FETCH_PROJECTS_FAILURE,
        data: null,
        status: res.status ? res.status : res,
      })
    } catch (err) {
      FNRedirect('/500');
      return dispatch({
        type: FETCH_PROJECTS_FAILURE,
        data: null,
        status: err.status ? err.status : err,
      });
    }
  };
}


export function fetchProjectsById(projectId) {
  return async dispatch => {
    try {
      const res = await fetch(`${host}/v2/users/jectid`, {
        method: 'POST',
        body: JSON.stringify(projectId),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      });
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          type: FETCH_PROJECT_ID_SUCCESS,
          data,
          status: res.status,
        });
      } else if (res.status === 400) {
        return dispatch({
          type: FETCH_PROJECT_ID_FAILURE,
          data,
          status: res.status,
        });
      }
      else if (res.status === 500 || res.status === 502) {
        return FNRedirect('/500');
      }
      return dispatch({
        type: FETCH_PROJECT_ID_FAILURE,
        data: null,
        status: res.status ? res.status : res,
      })
    } catch (err) {
      return dispatch({
        type: FETCH_PROJECT_ID_FAILURE,
        data: null,
        status: err.status ? err.status : err,
      });
    }
  };
}

export function fetchSearchProjects(searchQuery) {
  return async dispatch => {
    try {
      const res = await fetch(`${host}/v2/users/search`, {
        method: 'POST',
        body: JSON.stringify({ id : searchQuery }),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      });
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          type: FETCH_SEARCH_SUCCESS,
          data,
          status: res.status,
        });
      } else if (res.status === 400) {
        return dispatch({
          type: FETCH_SEARCH_FAILURE,
          data,
          status: res.status,
        });
      }
      else if (res.status === 500 || res.status === 502) {
        return FNRedirect('/500');
      }
      return dispatch({
        type: FETCH_SEARCH_FAILURE,
        data: null,
        status: res.status ? res.status : res,
      })
    } catch (err) {
      FNRedirect('/500');
      return dispatch({
        type: FETCH_SEARCH_FAILURE,
        data: null,
        status: err.status ? err.status : err,
      });
    }
  };
}
