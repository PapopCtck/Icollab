import React from 'react';
import { Typography, Icon, Avatar } from 'antd';
import PropTypes from 'prop-types';

import { formatDate } from '../../helpers';

import './StyleUpdateBox.css'

const { Title } = Typography;

export function UpdateBox({ update, theme }) {
  return (
    <div className="updatebox-container">
      <div className="updatebox-header">
        <Title style={{ marginBottom: '10px' }} level={3} className={'updatebox-title bold ' + theme + '-text'}>{update.title}</Title>
        <div className="updatebox-author">
          <Avatar size={50} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <div className="updatebox-author-name">
            <div className="bold">
              {update.author.fullName}
            </div>
            <div className="regular">
              {update.author.projectRole}
            </div>
          </div>
          <div className="updatebox-date regular">
            {update.updatedAt ? formatDate(update.updatedAt) : formatDate(update.createdAt)}
          </div>
        </div>
      </div>
      <div className="updatebox-content">
        {update.description}
      </div>
      <div className="updatebox-footer">
        <Icon style={{ fontSize: '20px', margin: '10px' }} type="ellipsis" />
        <Icon style={{ fontSize: '20px', margin: '10px' }} type="share-alt" />
      </div>
    </div>
  )
}

UpdateBox.propTypes = {
  update: PropTypes.object,
}
