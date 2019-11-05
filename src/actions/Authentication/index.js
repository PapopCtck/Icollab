
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

const host = process.env.REACT_APP_ICOLLAB_BACKEND;

export function register(registerForm) {
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
