import { FNRedirect, createCookie } from '../../helpers';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const host = process.env.REACT_APP_ICOLLAB_BACKEND;

export function fetchRegister(registerForm) {
  return async dispatch => {
    try {
      const res = await fetch(`${host}/v1/users/register`, {
        method: 'POST',
        body: JSON.stringify(registerForm),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      });
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          type: REGISTER_SUCCESS,
          data,
          status: res.status,
        });
      } else if (res.status === 400) {
        return dispatch({
          type: REGISTER_FAILURE,
          data,
          status: res.status,
        });
      }
      else if (res.status === 500 || res.status === 502) {
        return FNRedirect('/500');
      }
      return dispatch({
        type: REGISTER_FAILURE,
        data: null,
        status: res.status ? res.status : res,
      })
    } catch (err) {
      return dispatch({
        type: REGISTER_FAILURE,
        data: null,
        status: err.status ? err.status : err,
      });
    }
  };
}

export function fetchLogin(loginForm) {
  return async dispatch => {
    try {
      const res = await fetch(`${host}/v1/users/login`, {
        method: 'POST',
        body: JSON.stringify(loginForm),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      });
      const data = await res.json();

      if (res.status === 200) {
        createCookie('icollab_token',data.token, 1);
        createCookie('icollab_refreshtoken',data.refreshToken, 1);
        createCookie('icollab_userinfo',JSON.stringify(data.data), 1);
        return dispatch({
          type: LOGIN_SUCCESS,
          data,
          status: res.status,
        });
      } else if (res.status === 400) {
        return dispatch({
          type: LOGIN_FAILURE,
          data,
          status: res.status,
        });
      }
      else if (res.status === 500 || res.status === 502) {
        return FNRedirect('/500');
      }
      return dispatch({
        type: LOGIN_FAILURE,
        data: null,
        status: res.status ? res.status : res,
      })
    } catch (err) {
      return dispatch({
        type: LOGIN_FAILURE,
        data: null,
        status: err.status ? err.status : err,
      });
    }
  };
}
