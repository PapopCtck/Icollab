import React, { Component } from 'react';


import { ExploreCondition, ExploreResult } from '../../component';

export class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultProjects: [
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

  handleChange = (text) => {
    console.log(text);
  }

  handleSearch = (text) => {
    console.log(text);
  }

  handleCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }

  render() {
    const { resultProjects } = this.state;
    return (
      <div>
        <ExploreCondition handleChange={this.handleChange} handleSearch={this.handleSearch} />
        <ExploreResult resultProjects={resultProjects} handleChange={this.handleChange} handleCheck={this.handleCheck} />
      </div>
    )
  }
}

export default Explore
