import React, { Component, PropTypes } from 'react';
import UI from 'components/ui';
import Form from 'react-auto-form';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AuthActions from 'actions/auth';

class SignUp extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    handleClose: PropTypes.func,
    actions: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    console.log(this.props);
    return (
      <span>
        <span onClick={::this.toggleModal}>{this.props.children}</span>

        <UI.Modal active={this.state.isOpen} onClose={::this.toggleModal} toggle={::this.toggleModal} closeOnOuterClick>
          <div className="f-modal-header text-center">
            <UI.Header className="f-modal-header-title">Sign Up</UI.Header>
            <UI.Button type="reset" className="f-modal-close" onClick={::this.toggleModal}>&times;</UI.Button>
          </div>
          <div className="f-modal-body">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <Form onSubmit={::this.handleSubmit} trimOnSubmit>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                  </div>
                  <UI.Button type="submit" kind="success">Sign Up</UI.Button>
                </Form>
              </div>
            </div>
          </div>
        </UI.Modal>
      </span>
    );
  }

  handleSubmit(e, data) {
    e.preventDefault();

    const { email } = data;
    const username = email.substr(0, email.indexOf('@'));
    const user = {
      username,
      ...data,
    };

    this.props.actions.signUp(user);
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen }, () => {
      if (this.props.handleClose) {
        this.props.handleClose(this.state);
      }
    });
  }
}

// redux
function mapState(state) {
  const { auth } = state;
  return { auth };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({ ...AuthActions }, dispatch),
  };
}

const reduxConnector = connect(mapState, mapDispatch)(SignUp);

export default reduxConnector;
