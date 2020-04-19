import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ProjectDetailHeader, ProjectDetailContent } from '../../component';

import { fetchProjectsById } from '../../actions';

import { Loading } from '../../helpers';

import AppLang from '../../AppContext';

import './StyleProjectDetail.css';


export class ProjectDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectDetailAll: null,
      mockupData: {
        projectId: '1',
        projectTitle: 'Beach trash collector robot',
        projectLevel: ['enterprise'],
        roleNeeded: [{ title: 'mechanical Engineer', jobSkill: ['Python', 'C++', 'Linux', 'R'], jobDescription: 'you will be develop a program with a computer to control our precious robot that can save a humanity ...', neededAmount: 1, gotAmount: 0 }],
        projectIndustry: ['robotic', 'mechanic'],
        projectLocation: 'Bangkok',
        projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
        projectThumbnail: 'https://static.pexels.com/photos/302889/pexels-photo-302889.jpeg',
        projectStarters: [
          {
            userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            userId: '01231234',
            fullName: 'Brenda Mercer',
            userAssociation: ['MIT Student', 'Computer Engineering'],
            projectRole: 'project starter',
          },
          {
            userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            userId: '01231234',
            fullName: 'Jonathan Walker',
            userAssociation: ['MIT Student', 'Computer Engineering'],
            projectRole: 'lead designer',
          },
          {
            userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            userId: '01231234',
            fullName: 'Anne Voorhees',
            userAssociation: ['MIT Student', 'Computer Engineering'],
            projectRole: 'advisor',
          },
        ],
        projectFAQ: [
          {
            question: 'What is love?',
            answer: "Baby don't hurt me.",
          },
          {
            question: "Don't hurt me",
            answer: 'No more.',
          },
          {
            question: "This is a test for really long question so i'm suppose to make this question really really long and it should be really long but not really.",
            answer: "So to answer this question i also need to write something really long but i can't really think of something that long so here i'am writing this nonesense and wonder why you bother reading all of this????",
          },
        ],
        projectUpdates: [
          {
            title: 'Update that we just made up out of thin air',
            author: {
              userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              userId: '01231234',
              fullName: 'Brenda Mercer',
              userAssociation: ['MIT Student', 'Computer Engineering'],
              projectRole: 'project starter',
            },
            createdAt: '2019-11-07T10:52:33+0000',
            updatedAt: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus, lacus feugiat dictum cursus, felis augue dictum mauris, in interdum felis nunc in neque. Curabitur sed velit eleifend, sagittis lectus id, posuere mauris. Suspendisse potenti. Donec convallis quam enim, a pharetra nulla semper non. Cras auctor lectus egestas, maximus ex in, aliquam enim. Vestibulum scelerisque gravida magna et placerat. Vestibulum accumsan massa nunc, sodales convallis eros euismod vitae. Etiam pulvinar et nibh rutrum viverra. Nulla velit quam, imperdiet ac rutrum a, efficitur non lectus',
          },
          {
            title: 'Update that test if we really sane',
            author: {
              userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              userId: '01231234',
              fullName: 'Brenda Mercer',
              userAssociation: ['MIT Student', 'Computer Engineering'],
              projectRole: 'project starter',
            },
            createdAt: '2019-12-06T10:10:49+0000',
            updatedAt: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus, lacus feugiat dictum cursus, felis augue dictum mauris, in interdum felis nunc in neque. Curabitur sed velit eleifend, sagittis lectus id, posuere mauris. Suspendisse potenti. Donec convallis quam enim, a pharetra nulla semper non. Cras auctor lectus egestas, maximus ex in, aliquam enim. Vestibulum scelerisque gravida magna et placerat. Vestibulum accumsan massa nunc, sodales convallis eros euismod vitae. Etiam pulvinar et nibh rutrum viverra. Nulla velit quam, imperdiet ac rutrum a, efficitur non lectus',
          },
          {
            title: 'Update that we just made up to fill the space',
            author: {
              userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              userId: '01231234',
              fullName: 'Brenda Mercer',
              userAssociation: ['MIT Student', 'Computer Engineering'],
              projectRole: 'project starter',
            },
            createdAt: '2019-05-07T10:52:33+0000',
            updatedAt: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus, lacus feugiat dictum cursus, felis augue dictum mauris, in interdum felis nunc in neque. Curabitur sed velit eleifend, sagittis lectus id, posuere mauris. Suspendisse potenti. Donec convallis quam enim, a pharetra nulla semper non. Cras auctor lectus egestas, maximus ex in, aliquam enim. Vestibulum scelerisque gravida magna et placerat. Vestibulum accumsan massa nunc, sodales convallis eros euismod vitae. Etiam pulvinar et nibh rutrum viverra. Nulla velit quam, imperdiet ac rutrum a, efficitur non lectus',
          },

        ],
        projectComments: [
          {
            author: {
              userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              userId: '01231234',
              fullName: 'Brenda Mercer',
              userAssociation: ['MIT Student', 'Computer Engineering'],
              projectRole: 'project starter',
            },
            createdAt: '2019-12-06T10:10:49+0000',
            updatedAt: '',
            description: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          },
          {
            author: {
              userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              userId: '01231234',
              fullName: 'Brenda Mercer',
              userAssociation: ['MIT Student', 'Computer Engineering'],
              projectRole: 'project starter',
            },
            createdAt: '2019-12-06T10:10:49+0000',
            updatedAt: '',
            description: 'Eiei',
          },


        ],
      },
    }
    props.dispatch(fetchProjectsById({ id: this.props.match.params.id }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetchProjectsById !== this.props.fetchProjectsById) {
      const fetchProjectsById = this.props.fetchProjectsById;
      this.setState({ projectDetailAll: fetchProjectsById }, () => console.log(this.state));
    }
  }

  render() {
    const { projectDetailAll, mockupData } = this.state;
    const { appTheme } = this.context;
    if (!projectDetailAll) {
      return <div className={'main-loading ' + appTheme}><Loading /></div>
    }
    return (
      <div className="page-wrapper project-detail-container">
        <ProjectDetailHeader projectDetailAll={projectDetailAll} theme={appTheme}/>
        <ProjectDetailContent projectDetailAll={projectDetailAll} mockupData={mockupData} theme={appTheme}/>
      </div>
    )
  }
}

ProjectDetail.contextType = AppLang;

const mapStateToProps = state => {
  const fetchProjectsById = state.fetchProjectsById.data;
  return { fetchProjectsById };
}

export default connect(mapStateToProps)(ProjectDetail);

ProjectDetail.propTypes = {
  dispatch: PropTypes.func,
  fetchProjectsById: PropTypes.object,
  match: PropTypes.object,
}
