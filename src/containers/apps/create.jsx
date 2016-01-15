import React, { Component } from 'react';

import UI from 'components/ui';
const { Grid, Form, Button } = UI;

import styles from 'styles/containers';

class CreateAppContainer extends Component {
  onSubmit(e, data) {
    e.preventDefault();
    console.log(data);
  }

  render() {
    return (
      <section>
        <Grid.Container>
          <header className={styles.header}>
            <Grid.Row>
              <Grid.Col xs={10}>
                <h1 className={styles.headerTitle}>Create new application</h1>
              </Grid.Col>
            </Grid.Row>
          </header>
        </Grid.Container>

        <div className={styles.section}>
          <Grid.Container>
            <Form.Container onSubmit={::this.onSubmit}>
              <section>
                <h3>Image</h3>

                <Form.Group>
                  <Form.Input type="text" name="image" block placeholder="ubuntu, training/webapp" />
                </Form.Group>
              </section>

              <section>
                <h3>Name</h3>

                <Form.Group>
                  <Form.Input type="text" name="name" block />
                </Form.Group>
              </section>

              <section>
                <h3>Deployment strategy</h3>

                <Form.Group inline>
                  <Form.Label>
                    <Form.Input type="radio" name="deployment_strategy" value="every_node" />&nbsp;
                    every node
                  </Form.Label>
                </Form.Group>
                <Form.Group inline>
                  <Form.Label>
                    <Form.Input type="radio" name="deployment_strategy" value="emptiest_node" />&nbsp;
                    emptiest node
                  </Form.Label>
                </Form.Group>
                <Form.Group inline>
                  <Form.Label>
                    <Form.Input type="radio" name="deployment_strategy" value="high_availability" />&nbsp;
                    high availability
                  </Form.Label>
                </Form.Group>
              </section>

              <section>
                <h3>Ports</h3>
              </section>

              <section>
                <h3>Docker options</h3>

                <Form.Group inline>
                  <Form.Label>
                    <Form.Input type="checkbox" name="isAutoRestart" /> Autorestart
                  </Form.Label>
                </Form.Group>
                <Form.Group inline>
                  <Form.Label>
                    <Form.Input type="checkbox" name="isAutoDestroy" /> Autodestroy
                  </Form.Label>
                </Form.Group>
                <Form.Group inline>
                  <Form.Label>
                    <Form.Input type="checkbox" name="isPrivileged" /> Privileged
                  </Form.Label>
                </Form.Group>
              </section>

              <Button type="submit" kind="success" size="lg">Create</Button>
            </Form.Container>
          </Grid.Container>
        </div>
      </section>
    );
  }
}

export default CreateAppContainer;
