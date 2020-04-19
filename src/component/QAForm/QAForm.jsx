import React from 'react'
import { Form, Input, Icon, Button } from 'antd';
import PropTypes from 'prop-types';

import './StyleQAForm.css';

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
    const { content, appTheme } = this.props;
    const { getFieldDecorator, getFieldValue } = this.props.form;
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k) => (
      <div>
        <Form.Item
          label={<span className={appTheme + '-text'}>Question</span>}
          required={false}
          key={`question${k}`}
          style={{ marginBottom: '0px' }}
        >
          {getFieldDecorator(`question[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [
              {
                required: true,
                whitespace: true,
                message: 'Please input question or delete this field.',
              },
            ],
          })(<Input placeholder="Question" style={{ width: '100%', maxWidth: '700px' }} />)}
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            onClick={() => this.remove(k)}
          />
        </Form.Item>
        <Form.Item
          label={<span className={appTheme + '-text'}>Answer</span>}
          required={false}
          key={`answer${k}`}
        >
          {getFieldDecorator(`answer[${k}]`, {
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

export const QAForm = Form.create({
  name: 'dynamic_form_item',
  onFieldsChange(props, changedFields, allFields) {
    props.onChange(allFields,'qaforms');
  },
})(DynamicFieldSet);
