import React from 'react';
import { Spin,Icon } from 'antd';

import './StyleLoading.css';

const antIcon = <Icon type="loading" style={{ fontSize: 50 }} spin />;

export default () => (
  <div className="loading-container">
    <div className="loading-box">
      <div className="loading-img">
        <Spin className="loading-img" indicator={antIcon} size="large" />
      </div>
      <div className="loading-text">
        Loading
      </div>
    </div>

  </div>

);
