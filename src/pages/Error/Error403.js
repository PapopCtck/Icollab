import React, { Component } from 'react';
import { Result, Button } from 'antd';

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
