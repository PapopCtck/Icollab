import React from 'react'
import { Form, Input, Icon, Button, InputNumber } from 'antd';
import PropTypes from 'prop-types';

import './StylePeopleForm.css';

let id = 0;

const { TextArea } = Input;

class DynamicFieldSet extends React.Component {

  remove = k => {
    const { form } = this.props;
    const keys = form.getFieldValue('keys');
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  };

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  };

  render() {
    const { content } = this.props;
    const { getFieldDecorator, getFieldValue } = this.props.form;
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k) => (
      <div>
        <Form.Item
          label="Job Title"
          required={false}
          key={`jobTitle${k}`}
          style={{ marginBottom: '0px' }}
        >
          {getFieldDecorator(`jobTitle[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [
              {
                required: true,
                whitespace: true,
                message: 'Please input job title.',
              },
            ],
          })(<Input placeholder="Job Title" style={{ width: '100%', maxWidth: '700px' }} />)}
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            onClick={() => this.remove(k)}
          />
        </Form.Item>
        <Form.Item
          label="Skills"
          required={false}
          key={`jobSkills${k}`}
        >
          {getFieldDecorator(`jobSkills[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [
              {
                required: true,
                whitespace: true,
                message: 'Please provide skill for this job',
              },
            ],
          })(<Input placeholder="Skills" style={{ width: '100%', maxWidth: '700px' }} />)}
        </Form.Item>
        <Form.Item
          label="Description"
          required={false}
          key={`jobDescription${k}`}
        >
          {getFieldDecorator(`jobDescription[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [
              {
                required: true,
                whitespace: true,
                message: 'Please provide answer for your question',
              },
            ],
          })(<TextArea placeholder="Answer" style={{ width: '100%', maxWidth: '700px' }} />)}
        </Form.Item>
        <Form.Item
          label="Required amount"
          required={false}
          key={`jobAmount${k}`}
        >
          {getFieldDecorator(`jobAmount[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [
              {
                required: true,
                whitespace: true,
                message: 'Please provide amount of job for this title',
              },
            ],
          })(<InputNumber placeholder="Amount" min={1} max={20} style={{ width: '100%', maxWidth: '200px' }} />)}
        </Form.Item>
      </div>
    ));
    return (
      <Form onSubmit={this.handleSubmit}>
        {formItems}
        <Form.Item >
          <Button type="dashed" onClick={this.add} style={{ width: '100%', maxWidth: '700px' }}>
            <Icon type="plus" /> {content.addField}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

DynamicFieldSet.propTypes = {
  form: PropTypes.object,
  content: PropTypes.object,
}

export const PeopleForm = Form.create({
  name: 'dynamic_form_item',
  onFieldsChange(props, changedFields, allFields) {
    props.onChange(allFields, 'peopleforms');
  },
})(DynamicFieldSet);
