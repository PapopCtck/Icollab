import React, { Component } from 'react';
import { Result, Button } from 'antd';

export class Error404 extends Component {
  render() {
    return (
      <Result
        status="500"
        title="500"
        subTitle="Sorry, the server is wrong."
        extra={<Button onClick={() => this.props.history.push('/')} type="primary">Back Home</Button>}
      />
    )
  }
}

export default Error404
