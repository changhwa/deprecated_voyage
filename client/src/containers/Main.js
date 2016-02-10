import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import HeadNav from '../components/HeadNav';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <HeadNav />
        <div style={{ marginTop: '70px' }}>
          {children}
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.node
};

function mapStateToProps(state) {return state;}

export default connect(mapStateToProps)(Main);
