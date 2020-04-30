import React, { Component } from 'react';
import { message } from 'antd';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchGetProjectCategory, fetchEditProject, fetchProjectsById } from '../../actions';

import { EditBasicDetail, EditDetail } from '../../component';

import { getCookie } from '../../helpers';

import AppLang from '../../AppContext';

import content from './LangEditProject';

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
      tags: [],
      initContributors: null,
      questionList: null,
      roleNeeded: null,
      projectid: null,
    }
    props.dispatch(fetchGetProjectCategory());
    props.dispatch(fetchProjectsById({ id: this.props.match.params.id }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { qaforms, peopleforms, projectStory, projectTitle, projectDescription, category } = this.state;
    console.log(nextProps.fetchProjectsById)
    if (nextState.category !== category) {
      return true;
    }
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
    if (prevProps.fetchEditProject !== this.props.fetchEditProject) {
      const fetchEditProject = this.props.fetchEditProject;
      if (fetchEditProject.status === 200) {
        this.setState({ redirect: '/success' }, () => console.log(this.state));
      } else if (fetchEditProject.status === 403) {
        this.setState({ redirect: '/403' }, () => console.log(this.state));
      } else {
        this.setState({ redirect: '/500' }, () => console.log(this.state));
      }
    }
    if (prevProps.fetchProjectsById !== this.props.fetchProjectsById) {
      const fetchProjectsById = this.props.fetchProjectsById;
      console.log(fetchProjectsById)
      const Project = fetchProjectsById.Project[0];
      const questionList = fetchProjectsById.QuestionList;
      const roleNeeded = fetchProjectsById.RoleNeeded;
      const initContributors = fetchProjectsById.Contributors.map(person => ({ label: person.name, key: person.user_uid }));
      const contributors = fetchProjectsById.Contributors.map(person => ({ name: person.name, user_uid: person.user_uid }));
      this.setState({
        projectid: Project.project_uid,
        imageUrl: Project.image,
        projectStory: Project.projectstory,
        category: Project.jobfields,
        location: Project.location,
        projectLevel: Project.projectlevel,
        projectTitle: Project.projecttitle,
        projectDescription: Project.projectdescription,
        tags: Project.tags,
        initContributors,
        contributors,
        questionList,
        roleNeeded,
      }, () => console.log(this.state));
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
    const { projectTitle, projectStory, category, location, projectLevel, projectDescription, tags, contributors, imageUrl, questionList, roleNeeded, projectid } = this.state;
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
        questionlist: this.formatQuestion(questionList),
        roleneeded: this.formatPeople(roleNeeded),
        projectstarter_id: userInfo[0].user_uid,
        projectstarter_name: userInfo[0].name + ' ' + userInfo[0].lastname,
        contributors,
        image: imageUrl,
        projectid,
      }
      this.props.dispatch(fetchEditProject(obj, getCookie('icollab_token')));
      this.setState({ loading: true });
    }
  }

  handleChange = (value, name) => {
    this.setState({ [name]: value }, () => console.log(this.state))
  }

  formatQuestion = (questionList) => {
    const { qaforms } = this.state;
    const { question, answer, keys } = qaforms;
    let merged = [...questionList];
    console.log('Received values of form: ', qaforms);
    if (!keys) {
      console.log('no question');
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

  formatPeople = (roleNeeded) => {
    const { peopleforms } = this.state;
    const { jobTitle, jobSkills, jobDescription, jobAmount, keys } = peopleforms;
    let merged = [...roleNeeded];
    console.log('Received values of form: ', peopleforms);
    if (!keys) {
      console.log('no job');
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

  handleDeleteQuestion = (qa_uid) => {
    const { questionList } = this.state;
    const newQuestion = questionList.filter(question => question.qa_uid !== qa_uid);
    this.setState({ questionList: newQuestion }, () => console.log(this.state));
  }

  handleDeletePeople = (job_uid) => {
    const { roleNeeded } = this.state;
    const newRole = roleNeeded.filter(job => job.job_uid !== job_uid);
    this.setState({ roleNeeded: newRole }, () => console.log(this.state));
  }

  error = () => {
    const { appLang } = this.context;
    message.error(content[appLang].createBasicError);
  };

  qaerror = () => {
    // const { appLang } = this.context;
    message.error('please provide all question an answer');
  };

  joberror = () => {
    // const { appLang } = this.context;
    message.error('please provide all information on job');
  };

  render() {
    const { show, imageUrl, projectStory,
      projectCategory, redirect, loading,
      category, location, projectLevel,
      projectTitle, projectDescription,
      tags, initContributors, questionList, roleNeeded } = this.state;
    console.log(projectCategory, category)
    if (redirect) {
      return <Redirect to={redirect} />
    }
    return (
      <div className="create-project-container">
        <EditBasicDetail
          {...this.props}
          handleChange={this.handleChange}
          onFinishBasic={this.onFinishBasic}
          show={show}
          projectCategory={projectCategory}
          category={category}
          location={location}
          projectLevel={projectLevel} />
        <EditDetail
          handleChange={this.handleChange}
          show={show}
          onInput={this.onInput}
          imageUrl={imageUrl}
          onFinish={this.onFinish}
          projectStory={projectStory}
          loading={loading}
          {...this.props}
          projectTitle={projectTitle}
          projectDescription={projectDescription}
          tags={tags}
          initContributors={initContributors}
          questionList={questionList}
          roleNeeded={roleNeeded}
          handleDeleteQuestion={this.handleDeleteQuestion}
          handleDeletePeople={this.handleDeletePeople}
        />
      </div>
    )
  }
}

CreateProject.contextType = AppLang;

const mapStateToProps = state => {
  const fetchGetProjectCategory = state.fetchGetProjectCategory.data;
  const fetchEditProject = state.fetchEditProject;
  const fetchProjectsById = state.fetchProjectsById.data;
  return { fetchGetProjectCategory, fetchEditProject, fetchProjectsById };
}

export default connect(mapStateToProps)(CreateProject);
