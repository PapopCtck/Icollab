import React from 'react';
import { Typography, Icon, Avatar } from 'antd';

import { formatDate } from '../../helpers';

import './StyleUpdateBox.css'

const { Title } = Typography;

export function UpdateBox() {
  return (
    <div className="updatebox-container">
      <div className="updatebox-header">
        <Title style={{ marginBottom: '10px' }} level={3} className="updatebox-title bold">Update Title</Title>
        <div className="updatebox-author">
          <Avatar size={50} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <div className="updatebox-author-name">
            <div className="bold">
              Brenda Mercer
            </div>
            <div className="regular">
              project stater
            </div>
          </div>
          <div className="updatebox-date regular">
            {formatDate(new Date())}
          </div>
        </div>
      </div>
      <div className="updatebox-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus, lacus feugiat dictum cursus, felis augue dictum mauris, in interdum felis nunc in neque. Curabitur sed velit eleifend, sagittis lectus id, posuere mauris. Suspendisse potenti. Donec convallis quam enim, a pharetra nulla semper non. Cras auctor lectus egestas, maximus ex in, aliquam enim. Vestibulum scelerisque gravida magna et placerat. Vestibulum accumsan massa nunc, sodales convallis eros euismod vitae. Etiam pulvinar et nibh rutrum viverra. Nulla velit quam, imperdiet ac rutrum a, efficitur non lectus
      </div>
      <div className="updatebox-footer">
        <Icon style={{ fontSize: '20px', margin: '10px' }} type="ellipsis" />
        <Icon style={{ fontSize: '20px', margin: '10px' }} type="share-alt" />
      </div>
    </div>
  )
}
