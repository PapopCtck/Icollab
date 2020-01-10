import React, { Component } from 'react';

import { CreateBasicDetail, CreateDetail } from '../../component';

import './StyleCreateProject.css';

export class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      imageUrl: '',
      projectStory: null,
      qaforms: {
        question: null,
        answer: null,
      },
    }
  }

  onInput = (e) => {
    this.setState({ [e.target.id]: e.target.value }, () => console.log(this.state))
  }

  onFinishBasic = () => {
    this.setState({ show: false })
  }

  onFinish = () => {
    //todo add logic here 
    console.log(this.formatQuestion())
    console.log('finish');
  }

  handleChange = (value, name) => {
    this.setState({ [name]: value }, () => console.log(this.state))
  }

  formatQuestion = () => {
    const { qaforms } = this.state;
    const { question, answer } = qaforms;
    let merged = [];
    console.log('Received values of form: ', qaforms);
    if (!question) {
      console.log('no question');
      return;
    } else {
      for (let i = 0; i < question.length; i++) {
        if (!question[i].value && !answer[i].value) {
          continue;
        } else if (!question[i].value || !answer[i].value) {
          console.log('missing');
          merged = false;
          break;
        } else {
          merged.push({
            'question': question[i].value,
            'answer': answer[i].value,
          })
        }

      }
    }
    return merged;
  }

  render() {
    const { show, imageUrl, projectStory } = this.state;
    return (
      <div className="create-project-container">
        <CreateBasicDetail handleChange={this.handleChange} onFinishBasic={this.onFinishBasic} show={show} />
        <CreateDetail
          handleChange={this.handleChange}
          show={show}
          onInput={this.onInput}
          imageUrl={imageUrl}
          onFinish={this.onFinish}
          projectStory={projectStory}
        />
      </div>
    )
  }
}

export default CreateProject;
