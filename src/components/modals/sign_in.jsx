import React, { Component, PropTypes } from 'react';
import UI from 'components/ui';

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
      <span onClick={::this.toggleModal}>
        {this.props.children}
        <UI.Modal show={this.state.isOpen} onClose={::this.toggleModal} closeOnOuterClick>
          <a onClick={::this.toggleModal}>&times;</a>

          <div>hey</div>
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
