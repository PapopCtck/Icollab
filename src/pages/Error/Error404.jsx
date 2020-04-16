import React, { Component } from 'react';
import { Result, Button } from 'antd';
import PropTypes from 'prop-types';

import AppLang from '../../AppContext';

import content from './LangError';

export class Error404 extends Component {
  render() {
    const { appLang, appTheme } = this.context;
    return (
      <div className="errorContainer">
        <Result
          status="404"
          title={<span className={appTheme + '-text'}>404</span>}
          subTitle={<span className={appTheme + '-text'}>{content[appLang].err404}</span>}
          extra={<Button onClick={() => this.props.history.push('/')} type="primary">{content[appLang].backHomeBtn}</Button>}
        />
      </div>
    )
  }
}

Error404.contextType = AppLang;

export default Error404

Error404.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}
