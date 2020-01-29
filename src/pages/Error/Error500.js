import React, { Component } from 'react';
import { Result, Button } from 'antd';
import PropTypes from 'prop-types';

export class Error500 extends Component {
  render() {
    return (
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something's wrong with the server. Please try again later."
        extra={<Button onClick={() => this.props.history.push('/')} type="primary">Back Home</Button>}
      />
    )
  }
}

export default Error500

Error500.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}
