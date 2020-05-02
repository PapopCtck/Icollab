import React, { Component } from 'react';
import { Result, Button } from 'antd';
import PropTypes from 'prop-types';

import AppLang from '../../AppContext';

import content from './LangError';

import './StyleError.css';

export class Error500 extends Component {
  render() {
    const { appLang, appTheme } = this.context;
    return (
      <div className="errorContainer">
        <Result
          status="500"
          title={<span className={appTheme + '-text'}>500</span>}
          subTitle={<span className={appTheme + '-text'}>{content[appLang].err500}</span>}
          extra={<Button onClick={() => this.props.history.push('/')} type="primary">{content[appLang].backHomeBtn}</Button>}
        />
      </div>
    )
  }
}

Error500.contextType = AppLang;

export default Error500;

Error500.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}
