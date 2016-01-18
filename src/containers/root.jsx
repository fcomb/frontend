import React, { Component } from 'react';
import Helmet from 'react-helmet';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routeActions as RouteActions } from 'redux-simple-router';
import * as AuthActions from 'actions/auth';

import Header from 'components/header';

class RootContainer extends Component {
  componentWillReceiveProps(props) {
    if (this.props.state.auth.token !== props.state.auth.token) {
      this.props.actions.routePush(`/sign_in`);
    }
  }

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

const mapState = ({ auth, users }) => ({
  state: { auth, users },
});

const pickActions = (dispatch) => ({
  actions: bindActionCreators({ ...AuthActions, routePush: RouteActions.push }, dispatch),
});

export default connect(mapState, pickActions)(RootContainer);
