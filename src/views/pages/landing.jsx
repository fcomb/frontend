import React from 'react';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedin: 11
    };
  }

  render() {
    console.log(this.state)
    return (
      <section>
        is user loggedin? {this.state.loggedin}
      </section>
    )
  }
}

export default Landing;
