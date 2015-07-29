import React from 'react';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedin: 11
    };
  }

  render() {
    return (
      <section>
        is user yep? {this.state.loggedin}
      </section>
    )
  }
}

export default Landing;
