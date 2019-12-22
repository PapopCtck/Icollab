import React, { Component } from 'react';

import { CreateBasicDetail } from '../../component';
import { Button } from 'antd';


export class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    }
  }

  onChange = (text) => {
    console.log(text);
  }

  onFinishBasic = () => {
    this.setState({ show: false })
  }

  render() {
    const { show } = this.state;
    return (
      <div className="page-wrapper">
        <CreateBasicDetail onFinishBasic={this.onFinishBasic} show={show} />,
      </div>
    )
  }
}

export default CreateProject;
