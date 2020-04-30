import { FNRedirect } from '../../helpers';

export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';

export const FETCH_PROJECT_ID_SUCCESS = 'FETCH_PROJECT_ID_SUCCESS';
export const FETCH_PROJECT_ID_FAILURE = 'FETCH_PROJECT_ID_FAILURE';

export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const FETCH_SEARCH_FAILURE = 'FETCH_SEARCH_FAILURE';

export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE';

export const FETCH_CREATE_PROJ_SUCCESS = 'FETCH_CREATE_PROJ_SUCCESS';
export const FETCH_CREATE_PROJ_FAILURE = 'FETCH_CREATE_PROJ_FAILURE';

export const FETCH_EDIT_PROJ_SUCCESS = 'FETCH_EDIT_PROJ_SUCCESS';
export const FETCH_EDIT_PROJ_FAILURE = 'FETCH_EDIT_PROJ_FAILURE';

export const FETCH_SEARCH_USER_SUCCESS = 'FETCH_SEARCH_USER_SUCCESS';
export const FETCH_SEARCH_USER_FAILURE = 'FETCH_SEARCH_USER_FAILURE';

export const FETCH_REPORT_SUCCESS = 'FETCH_REPORT_SUCCESS';
export const FETCH_REPORT_FAILURE = 'FETCH_REPORT_FAILURE';

export const FETCH_APPLY_SUCCESS = 'FETCH_APPLY_SUCCESS';
export const FETCH_APPLY_FAILURE = 'FETCH_APPLY_FAILURE';

export const FETCH_PARTICIPANTS_SUCCESS = 'FETCH_PARTICIPANTS_SUCCESS';
export const FETCH_PARTICIPANTS_FAILURE = 'FETCH_PARTICIPANTS_FAILURE';

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
      else if (res.status === 404) {
        return FNRedirect('/404');
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
        body: JSON.stringify({ id: searchQuery }),
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

export function fetchGetProjectCategory() {
  return async dispatch => {
    try {
      const res = await fetch(`${host}/v3/users/basicdetail/projectcategory`, {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json' }),
      });
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          type: FETCH_CATEGORY_SUCCESS,
          data,
          status: res.status,
        });
      } else if (res.status === 400) {
        return dispatch({
          type: FETCH_CATEGORY_FAILURE,
          data,
          status: res.status,
        });
      }
      else if (res.status === 500 || res.status === 502) {
        return FNRedirect('/500');
      }
      return dispatch({
        type: FETCH_CATEGORY_FAILURE,
        data: null,
        status: res.status ? res.status : res,
      })
    } catch (err) {
      FNRedirect('/500');
      return dispatch({
        type: FETCH_CATEGORY_FAILURE,
        data: null,
        status: err.status ? err.status : err,
      });
    }
  };
}

export function fetchCreateProject(projectData,token) {
  return async dispatch => {
    try {
      const res = await fetch(`${host}/v3/users/basicdetail`, {
        method: 'POST',
        body: JSON.stringify(projectData),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': token,
        }),
      });
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          type: FETCH_CREATE_PROJ_SUCCESS,
          data,
          status: res.status,
        });
      } else if (res.status === 400) {
        return dispatch({
          type: FETCH_CREATE_PROJ_FAILURE,
          data,
          status: res.status,
        });
      }
      else if (res.status === 500 || res.status === 502) {
        return FNRedirect('/500');
      }
      return dispatch({
        type: FETCH_CREATE_PROJ_FAILURE,
        data: null,
        status: res.status ? res.status : res,
      })
    } catch (err) {
      return dispatch({
        type: FETCH_CREATE_PROJ_FAILURE,
        data: null,
        status: err.status ? err.status : err,
      });
    }
  };
}

export function fetchSearchUser(id,token) {
  return async dispatch => {
    try {
      const res = await fetch(`${host}/v3/users/searchuser`, {
        method: 'POST',
        body: JSON.stringify(id),
        headers: new Headers({ 
          'Content-Type': 'application/json',
          'Authorization': token,
        }),
      });
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          type: FETCH_SEARCH_USER_SUCCESS,
          data,
          status: res.status,
        });
      } else if (res.status === 400) {
        return dispatch({
          type: FETCH_SEARCH_USER_FAILURE,
          data,
          status: res.status,
        });
      }
      else if (res.status === 500 || res.status === 502) {
        return FNRedirect('/500');
      }
      return dispatch({
        type: FETCH_SEARCH_USER_FAILURE,
        data: null,
        status: res.status ? res.status : res,
      })
    } catch (err) {
      FNRedirect('/500');
      return dispatch({
        type: FETCH_SEARCH_USER_FAILURE,
        data: null,
        status: err.status ? err.status : err,
      });
    }
  };
}

export function fetchReportProject(id,token) {
  return async dispatch => {
    try {
      const res = await fetch(`${host}/v4/users/report`, {
        method: 'POST',
        body: JSON.stringify(id),
        headers: new Headers({ 
          'Content-Type': 'application/json',
          'Authorization': token,
        }),
      });
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          type: FETCH_REPORT_SUCCESS,
          data,
          status: res.status,
        });
      } else if (res.status === 400) {
        return dispatch({
          type: FETCH_REPORT_FAILURE,
          data,
          status: res.status,
        });
      }
      else if (res.status === 500 || res.status === 502) {
        return FNRedirect('/500');
      }
      return dispatch({
        type: FETCH_REPORT_FAILURE,
        data: null,
        status: res.status ? res.status : res,
      })
    } catch (err) {
      FNRedirect('/500');
      return dispatch({
        type: FETCH_REPORT_FAILURE,
        data: null,
        status: err.status ? err.status : err,
      });
    }
  };
}

export function fetchApplyProject(id,token) {
  return async dispatch => {
    try {
      const res = await fetch(`${host}/v2/users/participate`, {
        method: 'POST',
        body: JSON.stringify(id),
        headers: new Headers({ 
          'Content-Type': 'application/json',
          'Authorization': token,
        }),
      });
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          type: FETCH_APPLY_SUCCESS,
          data,
          status: res.status,
        });
      } else if (res.status === 400) {
        return dispatch({
          type: FETCH_APPLY_FAILURE,
          data,
          status: res.status,
        });
      }
      else if (res.status === 500 || res.status === 502) {
        return FNRedirect('/500');
      }
      return dispatch({
        type: FETCH_APPLY_FAILURE,
        data: null,
        status: res.status ? res.status : res,
      })
    } catch (err) {
      FNRedirect('/500');
      return dispatch({
        type: FETCH_APPLY_FAILURE,
        data: null,
        status: err.status ? err.status : err,
      });
    }
  };
}

export function fetchGetParticipants(id,token) {
  return async dispatch => {
    try {
      const res = await fetch(`${host}/v2/users/participants`, {
        method: 'POST',
        body: JSON.stringify(id),
        headers: new Headers({ 
          'Content-Type': 'application/json',
          'Authorization': token,
        }),
      });
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          type: FETCH_PARTICIPANTS_SUCCESS,
          data,
          status: res.status,
        });
      } else if (res.status === 400) {
        return dispatch({
          type: FETCH_PARTICIPANTS_FAILURE,
          data,
          status: res.status,
        });
      }
      else if (res.status === 500 || res.status === 502) {
        return FNRedirect('/500');
      }
      return dispatch({
        type: FETCH_PARTICIPANTS_FAILURE,
        data: null,
        status: res.status ? res.status : res,
      })
    } catch (err) {
      FNRedirect('/500');
      return dispatch({
        type: FETCH_PARTICIPANTS_FAILURE,
        data: null,
        status: err.status ? err.status : err,
      });
    }
  };
}

export function fetchEditProject (projectData,token) {
  return async dispatch => {
    try {
      const res = await fetch(`${host}/v2/users/editproject`, {
        method: 'POST',
        body: JSON.stringify(projectData),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': token,
        }),
      });
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          type: FETCH_EDIT_PROJ_SUCCESS,
          data,
          status: res.status,
        });
      } else if (res.status === 400) {
        return dispatch({
          type: FETCH_EDIT_PROJ_FAILURE,
          data,
          status: res.status,
        });
      }
      else if (res.status === 500 || res.status === 502) {
        return FNRedirect('/500');
      }
      return dispatch({
        type: FETCH_EDIT_PROJ_FAILURE,
        data: null,
        status: res.status ? res.status : res,
      })
    } catch (err) {
      return dispatch({
        type: FETCH_EDIT_PROJ_FAILURE,
        data: null,
        status: err.status ? err.status : err,
      });
    }
  };
}
