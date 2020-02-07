import React, { Component } from 'react';
import { Result, Button } from 'antd';
import PropTypes from 'prop-types';

import AppLang from '../../AppContext';

import content from './LangError';

export class Error500 extends Component {
  render() {
    const lang = this.context;
    return (
      <Result
        status="500"
        title="500"
        subTitle={content[lang].err500}
        extra={<Button onClick={() => this.props.history.push('/')} type="primary">{content[lang].backHomeBtn}</Button>}
      />
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
