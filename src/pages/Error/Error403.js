import React, { Component } from 'react';
import { Result, Button } from 'antd';
import PropTypes from 'prop-types';

export class Error403 extends Component {
  render() {
    return (
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button onClick={() => this.props.history.push('/')} type="primary">Back Home</Button>}
      />
    )
  }
}

export default Error403

Error403.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}
