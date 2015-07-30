import React from 'react';
import Store from 'store';
import UI from 'components/ui';

class Landing extends React.Component {
  setUser(email) {
    this.setState({ email });
  }

  update(type) {
    Store.dispatch({ type });
  }

  render() {
    return (
      <section>
        {this.state}
        <UI.Button onClick={this.update.bind(this, 'INCREMENT')}>+</UI.Button>
        <UI.Button onClick={this.update.bind(this, 'DECREMENT')}>-</UI.Button>
      </section>
    );
  }
}

export default Landing;
