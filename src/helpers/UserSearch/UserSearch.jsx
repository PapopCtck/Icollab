import React, { Component } from 'react';
import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';

import { fetchSearchUser } from '../../actions';
import { getCookie } from '../../helpers';

const { Option } = Select;

class UserRemoteSelect extends Component {
  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    this.fetchUser = debounce(this.fetchUser, 800);
  }

  state = {
    data: [],
    value: [],
    fetching: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.fetchSearchUser !== this.props.fetchSearchUser) {
      const fetchSearchUser = this.props.fetchSearchUser;
      const data = fetchSearchUser.namelist.map(user => ({
        text: `${user.name} ${user.lastname}`,
        value: user.user_uid,
      }));
      this.setState({ data, fetching: false }, () => console.log(this.state));
    }
  }

  fetchUser = value => {
    console.log('fetching user', value);
    this.setState({ data: [], fetching: true });
    this.props.dispatch(fetchSearchUser({ id: value }, getCookie('icollab_token')))
  };

  handleChange = value => {
    const { onChange } = this.props;
    this.setState({
      value,
      data: [],
      fetching: false,
    }, () => onChange(value.map(e => ({ user_uid: e.key, name: e.label })), 'contributors'));
  };

  render() {
    const { fetching, data, value } = this.state;
    const { style } = this.props;
    return (
      <Select
        mode="multiple"
        labelInValue
        value={value}
        placeholder="Select users"
        notFoundContent={fetching ? <Spin size="small" /> : null}
        filterOption={false}
        onSearch={this.fetchUser}
        onChange={this.handleChange}
        style={{ width: '100%', ...style }}
      >
        {data.map(d => (
          <Option key={d.value}>{d.text}</Option>
        ))}
      </Select>
    );
  }
}

const mapStateToProps = state => {
  const fetchSearchUser = state.fetchSearchUser.data;
  return { fetchSearchUser };
}

export default connect(mapStateToProps)(UserRemoteSelect);
