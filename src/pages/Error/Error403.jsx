import React, { Component } from 'react';
import { Result, Button } from 'antd';
import PropTypes from 'prop-types';

import AppLang from '../../AppContext';

import content from './LangError';

export class Error403 extends Component {
  render() {
    const { appLang, appTheme } = this.context;
    return (
      <div className="errorContainer">
        <Result
          status="403"
          title={<span className={appTheme + '-text'}>403</span>}
          subTitle={<span className={appTheme + '-text'}>{content[appLang].err403}</span>}
          extra={<Button onClick={() => this.props.history.push('/')} type="primary">{content[appLang].backHomeBtn}</Button>}
        />
      </div>
    )
  }
}

Error403.contextType = AppLang;

export default Error403

Error403.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}
