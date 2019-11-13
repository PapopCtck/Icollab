import React, { Component } from 'react'

import {
  LandingCarousel,
  LandingTrendingCard,
  LandingStartProject,
} from '../../component';

import './StyleMain.css';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredProject: [
        {
          projectId: '1',
          projectTitle: 'Beach trash collector robot 1',
          projectLevel: ['enterprise'],
          roleNeeded: [{ title: 'mechanical Engineer', jobSkill: ['Python', 'C++', 'Linux', 'R'], jobDescription: 'you will be develop a program with a computer to control our precious robot that can save a humanity ...', neededAmount: 1, gotAmount: 0 }],
          projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
          projectThumbnail: 'https://static.pexels.com/photos/302889/pexels-photo-302889.jpeg',
          projectStarters: [
            {
              userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              userId: '01231234',
              fullName: 'Brenda Mercer',
              userAssociation: ['MIT Student', 'Computer Engineering'],
            },
          ],
        },
        {
          projectId: '2',
          projectTitle: 'Beach trash collector robot 2',
          projectLevel: ['enterprise'],
          roleNeeded: [{ title: 'mechanical Engineer', jobSkill: ['Python', 'C++', 'Linux', 'R'], jobDescription: 'you will be develop a program with a computer to control our precious robot that can save a humanity ...', neededAmount: 1, gotAmount: 0 }],
          projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
          projectThumbnail: 'https://static.pexels.com/photos/302892/pexels-photo-302892.jpeg',
          projectStarters: [
            {
              userImg: 'BM',
              userId: '01231234',
              fullName: 'Brenda Mercer',
              userAssociation: ['MIT Student', 'Computer Engineering'],
            },
          ],
        },
        {
          projectId: '3',
          projectTitle: 'Beach trash collector robot 3',
          projectLevel: ['enterprise'],
          roleNeeded: [{ title: 'mechanical Engineer', jobSkill: ['Python', 'C++', 'Linux', 'R'], jobDescription: 'you will be develop a program with a computer to control our precious robot that can save a humanity ...', neededAmount: 1, gotAmount: 0 }],
          projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
          projectThumbnail: 'https://static.pexels.com/photos/226633/pexels-photo-226633.jpeg',
          projectStarters: [
            {

              userId: '01231234',
              fullName: 'Brenda Mercer',
              userAssociation: ['MIT Student', 'Computer Engineering'],
            },
          ],
        },
      ],
      trendingProject: [
        {
          projectId: '4',
          projectTitle: 'One developer one cat',
          projectLevel: ['enterprise'],
          roleNeeded: [{ title: 'mechanical Engineer', jobSkill: ['Python', 'C++', 'Linux', 'R'], jobDescription: 'you will be develop a program with a computer to control our precious robot that can save a humanity ...', neededAmount: 1, gotAmount: 0 }],
          projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
          projectThumbnail: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
          projectStarters: [
            {
              userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              userId: '01231234',
              fullName: 'Brenda Mercer',
              userAssociation: ['MIT Student', 'Computer Engineering'],
            },
          ],
        },
        {
          projectId: '5',
          projectTitle: 'I don\'t like sand',
          projectLevel: ['enterprise'],
          roleNeeded: [{ title: 'mechanical Engineer', jobSkill: ['Python', 'C++', 'Linux', 'R'], jobDescription: 'you will be develop a program with a computer to control our precious robot that can save a humanity ...', neededAmount: 1, gotAmount: 0 }],
          projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
          projectThumbnail: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
          projectStarters: [
            {
              userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              userId: '01231234',
              fullName: 'Anakin Skywalker',
              userAssociation: ['MIT Student', 'Computer Engineering'],
            },
          ],
        },
        {
          projectId: '6',
          projectTitle: 'It\'s probably cold to go alone',
          projectLevel: ['enterprise'],
          roleNeeded: [{ title: 'mechanical Engineer', jobSkill: ['Python', 'C++', 'Linux', 'R'], jobDescription: 'you will be develop a program with a computer to control our precious robot that can save a humanity ...', neededAmount: 1, gotAmount: 0 }],
          projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
          projectThumbnail: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
          projectStarters: [
            {
              userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              userId: '01231234',
              fullName: 'Mr.lonely',
              userAssociation: ['MIT Student', 'Computer Engineering'],
            },
          ],
        },
        {
          projectId: '7',
          projectTitle: 'One developer one cat 2',
          projectLevel: ['enterprise'],
          roleNeeded: [{ title: 'mechanical Engineer', jobSkill: ['Python', 'C++', 'Linux', 'R'], jobDescription: 'you will be develop a program with a computer to control our precious robot that can save a humanity ...', neededAmount: 1, gotAmount: 0 }],
          projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash or something even longer bra bra bra',
          projectThumbnail: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
          projectStarters: [
            {
              userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              userId: '01231234',
              fullName: 'Brenda Mercer',
              userAssociation: ['MIT Student', 'Computer Engineering'],
            },
          ],
        },
        {
          projectId: '8',
          projectTitle: 'I don\'t like sand 2',
          projectLevel: ['enterprise'],
          roleNeeded: [{ title: 'mechanical Engineer', jobSkill: ['Python', 'C++', 'Linux', 'R'], jobDescription: 'you will be develop a program with a computer to control our precious robot that can save a humanity ...', neededAmount: 1, gotAmount: 0 }],
          projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
          projectThumbnail: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
          projectStarters: [
            {
              userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              userId: '01231234',
              fullName: 'Anakin Skywalker',
              userAssociation: ['MIT Student', 'Computer Engineering'],
            },
          ],
        },
        {
          projectId: '9',
          projectTitle: 'It\'s probably cold to go alone 2',
          projectLevel: ['enterprise'],
          roleNeeded: [{ title: 'mechanical Engineer', jobSkill: ['Python', 'C++', 'Linux', 'R'], jobDescription: 'you will be develop a program with a computer to control our precious robot that can save a humanity ...', neededAmount: 1, gotAmount: 0 }],
          projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
          projectThumbnail: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
          projectStarters: [
            {
              userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              userId: '01231234',
              fullName: 'Mr.lonely',
              userAssociation: ['MIT Student', 'Computer Engineering'],
            },
          ],
        },
      ],
    }
  }

  render() {
    const { featuredProject, trendingProject } = this.state;
    return (
      <div className="page-wrapper">
        <div className="landing-title">
          <span className="bold">FEATURED</span>
        </div>
        <LandingCarousel featuredProject={featuredProject} />
        <LandingTrendingCard trendingProject={trendingProject} />
        <LandingStartProject />
      </div>
    )
  }
}

export default Main
