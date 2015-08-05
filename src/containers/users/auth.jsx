import React, { Component/* , PropTypes */ } from 'react';
// import { connect } from 'react-redux';

class Auth extends Component {
  static propTypes = {
    // todos: PropTypes.array.isRequired,
  }

  componentWillReceiveProps(props) {
    console.log(props);
  }

  render() {
    return (
      <div>{this.state}</div>
    );
  }
}

// const reduxConnector = connect((state) => {
//   const { todos } = state;
//
//   return { todos };
// })(Landing);

// export default reduxConnector;
export default Auth;
