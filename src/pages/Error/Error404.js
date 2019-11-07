import React, { Component } from 'react';
import { Result, Button } from 'antd';

export class Error404 extends Component {
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button onClick={() => this.props.history.push('/')} type="primary">Back Home</Button>}
      />
    )
  }
}

export default Error404
