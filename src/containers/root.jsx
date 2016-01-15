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

        {React.cloneElement(children, props)}
      </section>
    );
  }
}

const mapState = ({ auth }) => ({
  user: auth,
});

export default connect(mapState)(RootContainer);
