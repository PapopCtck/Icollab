import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchRefreshToken } from '../../actions';

class RefreshToken extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.dispatch(fetchRefreshToken());
  }
  render() {
    return null;
  }
}

RefreshToken.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(RefreshToken);
