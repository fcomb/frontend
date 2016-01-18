import React, { Component } from 'react';

class CreateNodeContainer extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: `center` }}>Connect new node via fcomb agent</h1>
        <h3>
          <pre style={{ textAlign: `center` }}>curl -Ls https://agent.fcomb.io | sudo -H sh -s tkn_j2UESTi9IA944HLYJG2SCZNfa5o5kZFy</pre>
        </h3>
      </div>
    );
  }
}

export default CreateNodeContainer;
