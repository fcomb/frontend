import React from 'react';
import Store from 'store';
import UI from 'components/ui';

class Landing extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  componentDidMount() {
    Store.subscribe(() => {
      const counter = Store.getState();
      this.setState({ counter });
    });
  }

  update(type) {
    Store.dispatch({ type });
  }

  render() {
    return (
      <section>
        {this.state.counter}
        <UI.Button onClick={this.update.bind(this, 'INCREMENT')}>+</UI.Button>
        <UI.Button onClick={this.update.bind(this, 'DECREMENT')}>-</UI.Button>
      </section>
    );
  }
}

export default Landing;
