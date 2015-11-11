import React, { Component } from 'react';
import UI from 'components/ui';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from 'actions/auth';

const {
  Grid, Grid: { Row, Col },
  Form, Form: { Input, Group},
  Button,
} = UI;
const styles = {};

class SignInContainer extends Component {
  handleOnSubmit(e, data) {
    e.preventDefault();

    this.props.actions.signIn(data);
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

const mapState = ({ auth }) => ({
  state: { auth },
});

const mapDispatch = (dispatch) => ({
  actions: bindActionCreators(AuthActions, dispatch),
});

export default connect(mapState, mapDispatch)(SignInContainer);
