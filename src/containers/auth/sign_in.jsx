import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pushPath } from 'redux-simple-router';
import * as AuthActions from 'actions/auth';

import UI from 'components/ui';
import styles from 'styles/login';

const {
  Grid, Grid: { Row, Col },
  Form, Form: { Input, Group },
  Button,
} = UI;

class SignInContainer extends Component {
  componentWillReceiveProps(props) {
    if (props.state.auth.token && this.props.state.auth.token !== props.state.auth.token) {
      this.props.actions.pushPath(`/`);
    }
  }

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
              <h3 className={styles.textCenter}>Log In {this.props.state.auth.inProccess && <span>LOADING</span>}</h3>

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
  actions: bindActionCreators({ ...AuthActions, pushPath }, dispatch),
});

export default connect(mapState, mapDispatch)(SignInContainer);
