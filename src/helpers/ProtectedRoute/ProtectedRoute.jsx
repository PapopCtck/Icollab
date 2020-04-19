import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { getCookie } from '../Cookie/Cookie';

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getCookie('icollab_token') ? (
        <Component {...props} />
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
