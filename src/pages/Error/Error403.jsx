import React, { Component } from 'react';
import { Result, Button } from 'antd';
import PropTypes from 'prop-types';

import AppLang from '../../AppContext';

import content from './LangError';

export class Error403 extends Component {
  render() {
    const lang = this.context;
    return (
      <Result
        status="403"
        title="403"
        subTitle={content[lang].err403}
        extra={<Button onClick={() => this.props.history.push('/')} type="primary">{content[lang].backHomeBtn}</Button>}
      />
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
