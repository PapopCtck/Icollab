import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ProjectDetailHeader, ProjectDetailContent } from '../../component';

import { fetchProjectsById } from '../../actions';

import './StyleProjectDetail.css';
import { Loading } from '../../helpers';

export class ProjectDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectDetail: null,
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
      },
    }
    props.dispatch(fetchProjectsById({ id: this.props.match.params.id }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetchProjectsById !== this.props.fetchProjectsById) {
      const fetchProjectsById = this.props.fetchProjectsById;
      this.setState({ projectDetail: fetchProjectsById }, () => console.log(this.state));
    }
  }

  render() {
    const { projectDetail,mockupData } = this.state;
    if (!projectDetail) {
      return <Loading />
    }
    return (
      <div className="page-wrapper project-detail-container">
        <ProjectDetailHeader projectDetail={projectDetail} />
        <ProjectDetailContent projectDetail={projectDetail} mockupData={mockupData} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const fetchProjectsById = state.fetchProjectsById.data;
  return { fetchProjectsById };
}

export default connect(mapStateToProps)(ProjectDetail)
