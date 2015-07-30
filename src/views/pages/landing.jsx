import React from 'react';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: 'test@theaqua.im'
      }
    };
  }

  render() {
    console.log(this.state)
    return (
      <section>
        User: {JSON.stringify(this.state.user)}
      </section>
    );
  }
}

export default Landing;
