import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { getCookie } from '../Cookie/Cookie';

export const ProtectedRoute = ({ component: Component, setTheme, setLang, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getCookie('icollab_token') ? (
        <Component {...props} setLang={setLang} setTheme={setTheme} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      )
    }
  />
);
