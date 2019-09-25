import React, { Component } from 'react'
import { Input, Icon } from 'antd'

export class RightFooter extends Component {
  render() {
    return (
      <div className="right-footer-container">
        <div className="right-footer-email">
          <Input
            placeholder="Email"
            suffix={
              <Icon className="primary-icon" type="mail"/>
            }
          />
          <span className="input-bottom-text">
            Stay in touch with us for the freshest products!
          </span>
        </div>
        <div className="right-footer-social">
          <Icon type="facebook" className="primary-icon social-icon"/>
          <Icon type="instagram" className="primary-icon social-icon"/>
          <Icon type="twitter" className="primary-icon social-icon"/>
          <Icon type="reddit" className="primary-icon social-icon"/>
        </div>
      </div>
    )
  }
}

export default RightFooter
