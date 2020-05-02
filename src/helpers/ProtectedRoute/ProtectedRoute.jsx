import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

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

ProtectedRoute.propTypes = {
  component: PropTypes.object, 
  setTheme: PropTypes.func, 
  setLang: PropTypes.func,
}
