import React, { Component } from 'react';
import { connect } from 'react-redux';

import Helmet from 'react-helmet';

import Header from 'components/header';

class RootContainer extends Component {
  render() {
    const { children, ...props } = this.props;

    return (
      <section>
        <Helmet title="fcomb" titleTemplate="%s | f.containers" />
        <Header {...props} />

        {children}
      </section>
    );
  }
}

const mapState = ({ users }) => ({
  users,
});

export default connect(mapState)(RootContainer);
