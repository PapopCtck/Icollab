import React, { Component } from 'react';
import { message } from 'antd';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
      redirect: '',
      projectTitle: '',
      projectDescription: '',
      projectstarters: null,
    }
    props.dispatch(fetchGetProjectCategory());
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { qaforms, peopleforms, projectStory, projectTitle, projectDescription } = this.state;
    if (nextState.qaforms !== qaforms) {
      return false;
    }
    if (nextState.peopleforms !== peopleforms) {
      return false;
    }
    if (nextState.projectStory !== projectStory) {
      return false;
    }
    if (nextState.projectTitle !== projectTitle) {
      return false;
    }
    if (nextState.projectDescription !== projectDescription) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetchGetProjectCategory !== this.props.fetchGetProjectCategory) {
      const fetchGetProjectCategory = this.props.fetchGetProjectCategory;
      this.setState({ projectCategory: fetchGetProjectCategory }, () => console.log(this.state));
    }
    if (prevProps.fetchCreateProject !== this.props.fetchCreateProject) {
      const fetchCreateProject = this.props.fetchCreateProject;
      if (fetchCreateProject.status === 200) {
        this.setState({ redirect: '/success' }, () => console.log(this.state));
      } else if (fetchCreateProject.status === 403) {
        this.setState({ redirect: '/403' }, () => console.log(this.state));
      } else {
        this.setState({ redirect: '/500' }, () => console.log(this.state));
      }

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
    const { projectTitle, projectStory, category, location, projectLevel, projectDescription, tags, projectstarters } = this.state;
    if (!projectTitle || !projectDescription || tags.length === 0) {
      this.error();
    } else {
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
        projectstarters,
      }
      this.props.dispatch(fetchCreateProject(obj, getCookie('icollab_token')));
    }
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
    const { show, imageUrl, projectStory, projectCategory, redirect } = this.state;
    if (redirect) {
      return <Redirect to={redirect} />
    }
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
  const fetchCreateProject = state.fetchCreateProject;
  return { fetchGetProjectCategory, fetchCreateProject };
}

export default connect(mapStateToProps)(CreateProject);
