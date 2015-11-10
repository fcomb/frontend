import React, { Component } from 'react';
import { Grid, Form, Button } from 'components/ui';

const { Row, Col } = Grid;
const { Input, Group } = Form;
const styles = {};

export default class extends Component {
  handleOnSubmit(e, data) {
    e.preventDefault();

    console.log(data);
  }

  render() {
    return (
      <Grid.Container>
        <Row>
          <Col sm="4" smOffset="4">
            <div className={styles.panel}>
              <h3 className={styles.textCenter}>Log In</h3>

              <Form.Container onSubmit={::this.handleOnSubmit}>
                <Group size="lg">
                  <Input name="email" type="email" placeholder="E-mail" block />
                </Group>

                <Group size="lg">
                  <Input name="password" type="password" placeholder="Password" block />
                </Group>

                <Button type="submit" kind="primary" size="lg" block>Sign In</Button>
              </Form.Container>
            </div>
          </Col>
        </Row>
      </Grid.Container>
    );
  }
}
