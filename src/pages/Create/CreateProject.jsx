import React, { Component } from 'react';

import { CreateBasicDetail, CreateDetail } from '../../component';

import './StyleCreateProject.css';

export class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      imageUrl: '',
    }
  }

  onSelect = (value, name) => {
    this.setState({ [name]: value }, () => console.log(this.state))
  }

  onInput = (e) => {
    this.setState({ [e.target.id]: e.target.value }, () => console.log(this.state))
  }

  onImageUpload = (imageUrl) => {
    this.setState({ imageUrl })
  }

  onFinishBasic = () => {
    this.setState({ show: false })
  }

  setImage = (projectImage) => {
    this.setState({ projectImage },() => console.log(this.state));
  }

  render() {
    const { show, imageUrl } = this.state;
    return (
      <div className="create-project-container">
        <CreateBasicDetail onSelect={this.onSelect} onFinishBasic={this.onFinishBasic} show={show} />
        <CreateDetail onSelect={this.onSelect} show={show} onInput={this.onInput} onImageUpload={this.onImageUpload} imageUrl={imageUrl} setImage={this.setImage} />
      </div>
    )
  }
}

export default CreateProject;
