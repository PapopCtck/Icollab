import React, { Component } from 'react';
import { message } from 'antd';
import { connect } from 'react-redux';

import { fetchGetProjectCategory, fetchCreateProject } from '../../actions';

import { CreateBasicDetail, CreateDetail } from '../../component';

import { getCookie } from '../../helpers';

import AppLang from '../../AppContext';

import content from './LangCreateProject';

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
      peopleforms: {
        jobTitle: null,
        jobSkills: null,
        jobDescription: null,
        jobAmount: null,
      },
      category: null,
      location: null,
      projectLevel: null,
      projectCategory: [],
    }
    props.dispatch(fetchGetProjectCategory());
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { qaforms, peopleforms, projectStory } = this.state;
    if (nextState.qaforms !== qaforms) {
      return false;
    }
    if (nextState.peopleforms !== peopleforms) {
      return false;
    }
    if (nextState.projectStory !== projectStory) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetchGetProjectCategory !== this.props.fetchGetProjectCategory) {
      const fetchGetProjectCategory = this.props.fetchGetProjectCategory;
      this.setState({ projectCategory: fetchGetProjectCategory }, () => console.log(this.state));
    }
  }

  onInput = (e) => {
    this.setState({ [e.target.id]: e.target.value }, () => console.log(this.state))
  }

  onFinishBasic = () => {
    const { category, location, projectLevel } = this.state;
    if (!category || !location || !projectLevel) {
      this.error();
    } else {
      this.setState({ show: false })
    }

  }

  onFinish = () => {
    //todo add logic here 
    const userInfo = JSON.parse(getCookie('icollab_userinfo'));
    const { projectTitle, projectStory, category, location, projectLevel, projectDescription, tags } = this.state;
    console.log(userInfo)
    console.log(this.formatQuestion());
    console.log(this.formatPeople());
    console.log(getCookie('icollab_token'))
    const obj = {
      projecttitle: projectTitle, 
      projectstory: projectStory, 
      jobfields: category, 
      location, 
      projectlevel: projectLevel, 
      projectdescription: projectDescription, 
      tags,
      questionlist: this.formatQuestion(),
      roleneeded: this.formatPeople(),
      userownerid: userInfo[0].user_uid,
      projectstarters: [userInfo[0].user_uid],
    }
    console.log(obj);
    this.props.dispatch(fetchCreateProject(obj,getCookie('icollab_token')));
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
        if (!question[i] && !answer[i]) {
          break;
        } else if (!question[i].value && !answer[i].value) {
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

  formatPeople = () => {
    const { peopleforms } = this.state;
    const { jobTitle, jobSkills, jobDescription, jobAmount } = peopleforms;
    let merged = [];
    console.log('Received values of form: ', peopleforms);
    if (!jobTitle) {
      console.log('no job');
      return;
    } else {
      for (let i = 0; i < jobTitle.length; i++) {
        if (!jobTitle[i] && !jobSkills[i] && !jobDescription[i] && !jobAmount[i]) {
          break;
        } else if (!jobTitle[i].value && !jobSkills[i].value && !jobDescription[i].value && !jobAmount[i].value) {
          continue;
        } else if (!jobTitle[i].value || !jobSkills[i].value || !jobDescription[i].value || !jobAmount[i].value) {
          console.log('missing');
          merged = false;
          break;
        } else {
          merged.push({
            'jobtitle': jobTitle[i].value,
            'jobskills': jobSkills[i].value,
            'jobdescription': jobDescription[i].value,
            'jobamount': jobAmount[i].value,
          })
        }

      }
    }
    return merged;
  }

  error = () => {
    const { appLang } = this.context;
    message.error(content[appLang].createBasicError);
  };

  render() {
    const { show, imageUrl, projectStory, projectCategory } = this.state;
    return (
      <div className="create-project-container">
        <CreateBasicDetail handleChange={this.handleChange} onFinishBasic={this.onFinishBasic} show={show} {...this.props} projectCategory={projectCategory} />
        <CreateDetail
          handleChange={this.handleChange}
          show={show}
          onInput={this.onInput}
          imageUrl={imageUrl}
          onFinish={this.onFinish}
          projectStory={projectStory}
          {...this.props}
        />
      </div>
    )
  }
}

CreateProject.contextType = AppLang;

const mapStateToProps = state => {
  const fetchGetProjectCategory = state.fetchGetProjectCategory.data;
  const fetchCreateProject = state.fetchCreateProject.data;
  return { fetchGetProjectCategory, fetchCreateProject };
}

export default connect(mapStateToProps)(CreateProject);
