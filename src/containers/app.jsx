import React, { Component } from 'react';
import Landing from './pages/landing';

export default class App extends Component {
  constructor(...args) {
    super(...args);

    console.log(...args);
  }

  render() {
    return (
      <Landing />
    );
  }
}
