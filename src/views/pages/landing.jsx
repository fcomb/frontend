import React from 'react';
import UI from 'components/ui';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'test@theaqua.im'
    };
  }

  setUser(email) {
    this.setState({ email });
  }

  render() {
    return (
      <section>
        he: {JSON.stringify(this.state)}
        <UI.Button onClick={this.setUser.bind(this, 'aha@theaqua.im')}>test</UI.Button>
      </section>
    );
  }
}

export default Landing;
