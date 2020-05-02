import React, { Component } from 'react';
import { message } from 'antd';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

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
      contributors: null,
      loading: false,
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
      this.setState({ projectCategory: fetchGetProjectCategory });
    }
    if (prevProps.fetchCreateProject !== this.props.fetchCreateProject) {
      const fetchCreateProject = this.props.fetchCreateProject;
      if (fetchCreateProject.status === 200) {
        this.setState({ redirect: '/success' });
      } else if (fetchCreateProject.status === 403) {
        this.setState({ redirect: '/403' });
      } else {
        this.setState({ redirect: '/500' });
      }

    }
  }

  onInput = (e) => {
    this.setState({ [e.target.id]: e.target.value })
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
    const userInfo = JSON.parse(getCookie('icollab_userinfo'));
    const { projectTitle, projectStory, category, location, projectLevel, projectDescription, tags, contributors, imageUrl } = this.state;
    if (!projectTitle || !projectDescription || !projectStory || tags.length === 0) {
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
        projectstarter_id: userInfo[0].user_uid,
        projectstarter_name: userInfo[0].name + ' ' + userInfo[0].lastname,
        contributors,
        image: imageUrl,
      }
      this.props.dispatch(fetchCreateProject(obj, getCookie('icollab_token')));
      this.setState({ loading: true });
    }
  }

  handleChange = (value, name) => {
    this.setState({ [name]: value })
  }

  formatQuestion = () => {
    const { qaforms } = this.state;
    const { question, answer, keys } = qaforms;
    let merged = [];
    if (!keys) {
      return merged;
    } else {
      for (let i = 0; i < keys.value.length; i++) {
        if (!question[keys.value[i]] && !answer.value[keys[i]]) {
          break;
        } else if (!question[keys.value[i]].value && !answer[keys.value[i]].value) {
          continue;
        } else if (!question[keys.value[i]].value || !answer[keys.value[i]].value) {
          this.qaerror();
          merged = [];
          break;
        } else {
          merged.push({
            'question': question[keys.value[i]].value,
            'answer': answer[keys.value[i]].value,
          })
        }

      }
    }
    return merged;
  }

  formatPeople = () => {
    const { peopleforms } = this.state;
    const { jobTitle, jobSkills, jobDescription, jobAmount, keys } = peopleforms;
    let merged = [];
    if (!keys) {
      return merged;
    } else {
      for (let i = 0; i < keys.value.length; i++) {
        if (!jobTitle[keys.value[i]] && !jobSkills[keys.value[i]] && !jobDescription[keys.value[i]] && !jobAmount[keys.value[i]]) {
          break;
        } else if (!jobTitle[keys.value[i]].value && !jobSkills[keys.value[i]].value && !jobDescription[keys.value[i]].value && !jobAmount[keys.value[i]].value) {
          continue;
        } else if (!jobTitle[keys.value[i]].value || !jobSkills[keys.value[i]].value || !jobDescription[keys.value[i]].value || !jobAmount[keys.value[i]].value) {
          this.joberror();
          merged = [];
          break;
        } else {
          merged.push({
            'jobtitle': jobTitle[keys.value[i]].value,
            'jobskills': jobSkills[keys.value[i]].value,
            'jobdescription': jobDescription[keys.value[i]].value,
            'jobamount': jobAmount[keys.value[i]].value,
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

  qaerror = () => {
    message.error('please provide all question an answer');
  };

  joberror = () => {
    message.error('please provide all information on job');
  };

  render() {
    const { show, imageUrl, projectStory, projectCategory, redirect, loading } = this.state;
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
          loading={loading}
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

CreateProject.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fetchGetProjectCategory: PropTypes.object,
  fetchCreateProject: PropTypes.object,
}


export default connect(mapStateToProps)(CreateProject);
