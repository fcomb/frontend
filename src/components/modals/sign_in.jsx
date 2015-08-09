import React, { Component, PropTypes } from 'react';
import UI from 'components/ui';
import Form from 'react-auto-form';

class SignIn extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    handleClose: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <span>
        <span onClick={::this.toggleModal}>{this.props.children}</span>

        <UI.Modal active={this.state.isOpen} onClose={::this.toggleModal} closeOnOuterClick>
          <div className="f-modal-header text-center">
            <UI.Header className="f-modal-header-title">Sign In</UI.Header>
            <UI.Button type="reset" className="f-modal-close" onClick={::this.toggleModal}>&times;</UI.Button>
          </div>
          <div className="f-modal-body">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <Form>
                  <div className="form-group">
                    <label htmlFor="userEmail">Email address</label>
                    <input type="email" className="form-control" id="userEmail" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userPassword">Password</label>
                    <input type="email" className="form-control" id="userPassword" placeholder="Password" />
                  </div>
                  <UI.Button type="submit" kind="primary">Sign Up</UI.Button>
                </Form>
              </div>
            </div>
          </div>
        </UI.Modal>
      </span>
    );
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen }, () => {
      if (this.props.handleClose) {
        this.props.handleClose(this.state);
      }
    });
  }
}

export default SignIn;
