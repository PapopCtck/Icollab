import React, { Component } from 'react';
import { Result, Button } from 'antd';
import PropTypes from 'prop-types';

import AppLang from '../../AppContext';

import content from './LangError';

export class Error404 extends Component {
  render() {
    const { appLang } = this.context;
    return (
      <Result
        status="404"
        title="404"
        subTitle={content[appLang].err404}
        extra={<Button onClick={() => this.props.history.push('/')} type="primary">{content[appLang].backHomeBtn}</Button>}
      />
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
