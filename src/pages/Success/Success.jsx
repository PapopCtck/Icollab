import React, { useContext } from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import AppContext from '../../AppContext';

import './StyleSuccess.css';

export function Success() {
  const { appTheme } = useContext(AppContext);
  return (
    <div className="success-container">
      <Result
        status="success"
        title={<div className={appTheme + '-text'}>Successfully Created the project!</div>}
        subTitle={<div className={appTheme + '-text'}>You can track this project status in Tracking page.</div>}
        extra={[
          <Button>
            <Link to="/">Back home</Link>
          </Button>,
          <Button type="primary"><Link to="/trackproject">Go to tracking page</Link></Button>,
        ]}
      />
    </div>
  )
}

export function ApplySuccess() {
  const { appTheme } = useContext(AppContext);
  return (
    <div className="success-container">
      <Result
        status="success"
        title={<div className={appTheme + '-text'}>Successfully Apply for the project!</div>}
        subTitle={<div className={appTheme + '-text'}>You can track this application status in Tracking page.</div>}
        extra={[
          <Button>
            <Link to="/">Back home</Link>
          </Button>,
          <Button type="primary"><Link to="/appliedproject">Go to tracking page</Link></Button>,
        ]}
      />
    </div>
  )
}
