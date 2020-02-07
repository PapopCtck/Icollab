import React, { Component } from 'react';
import { Timeline } from 'antd';
import { Parallax } from 'rc-scroll-anim';
import PropTypes from 'prop-types';

import { UpdateBox } from '../../helpers';

import './StyleProjectDetailUpdates.css';

export class ProjectDetailUpdates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sticky: false,
      monthArray: this.getMonthArray(props.data.projectUpdates),
      activeMonth: 0,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { sticky } = this.state;
    const top = this.timeline.getBoundingClientRect().top;
    if (!sticky && top < 300) {
      this.setState({ sticky: true })
    } else if (sticky && top > 300) {
      this.setState({ sticky: false })
    }
  }

  getMonthArray = (updates) => {
    let monthArray = [];
    updates.forEach(update => {
      const newDate = new Date(update.updatedAt ? update.updatedAt : update.createdAt);
      if (!monthArray.includes(`${newDate.getMonth()} ${newDate.getFullYear()}`)) {
        monthArray.push(`${newDate.getMonth()} ${newDate.getFullYear()}`)
      }
    });
    return monthArray.sort((a, b) => {
      a = a.split(' ');
      b = b.split(' ');
      return new Date(b[1], b[0], 1) - new Date(a[1], a[0], 1)
    });
  }

  getMonthName = (month) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month];
  }

  setActiveMonth = (date) => {
    const { monthArray } = this.state;
    const newDate = new Date(date);
    this.setState({
      activeMonth: monthArray.indexOf(`${newDate.getMonth()} ${newDate.getFullYear()}`),
    }, () => console.log(this.state))
  }

  render() {
    const { sticky, monthArray, activeMonth } = this.state;
    const { data } = this.props;
    const sortedUpdates = data.projectUpdates.sort((a, b) => new Date(b.updatedAt ? b.updatedAt : b.createdAt) - new Date(a.updatedAt ? a.updatedAt : a.createdAt))
    return (
      <div className="projectdetail-updates-container" ref={(ref) => this.timeline = ref}>
        <div className="projectdetail-main">
          {
            sortedUpdates.map((update, index) => (
              <Parallax
                animation={
                  {
                    y: 0,
                    opacity: 1,
                    playScale: [0, 0.4],
                    onComplete: () => update.updatedAt ? this.setActiveMonth(update.updatedAt) : this.setActiveMonth(update.createdAt),
                    onCompleteBack: () => { if (index !== 0) { update.updatedAt ? this.setActiveMonth(sortedUpdates[index - 1].updatedAt) : this.setActiveMonth(sortedUpdates[index - 1].createdAt) } },
                  }
                }
                style={{ transform: 'translateY(100px)', opacity: 0 }}
                className="code-box-shape"
              >
                <UpdateBox update={update} />
              </Parallax>
            ))
          }

        </div>
        <div className={'projectdetail-sider'} >
          <Timeline className={`projectdetail-timeline ${sticky ? 'sticky' : ''}`}>
            {
              monthArray.map((month, index) => {
                month = month.split(' ');
                return <Timeline.Item color={index === activeMonth ? 'green' : 'gray'}>{this.getMonthName(month[0]) + ' ' + month[1]}</Timeline.Item>
              })
            }

          </Timeline>

        </div>
      </div >
    )
  }
}

export default ProjectDetailUpdates;

ProjectDetailUpdates.propTypes = {
  data: PropTypes.object,
}
