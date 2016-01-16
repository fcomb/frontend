import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routeActions as RouteActions } from 'redux-simple-router';
import * as AuthActions from 'actions/auth';

import UI from 'components/ui';
import styles from 'styles/login';

const {
  Grid, Grid: { Row, Col },
  Form, Form: { Input, Group },
  Button,
} = UI;

class SignUpContainer extends Component {
  componentWillReceiveProps(props) {
    if (props.state.auth.token && this.props.state.auth.token !== props.state.auth.token) {
      this.props.actions.route.push(`/`);
    }
  }

  handleOnSubmit(e, data) {
    e.preventDefault();

    this.props.actions.signUp(data);
  }

  render() {
    return (
      <Grid.Container>
        <Row>
          <Col sm="4" smOffset="4">
            <div className={styles.panel}>
              <h3 className={styles.textCenter}>Sign Up {this.props.state.auth.inProccess && <span>LOADING</span>}</h3>

              <Form.Container onSubmit={::this.handleOnSubmit}>
                <Group size="lg">
                  <Input name="email" type="email" placeholder="E-mail" block />
                </Group>

                <Group size="lg">
                  <Input name="password" type="password" placeholder="Password" block />
                </Group>

                <Button type="submit" kind="primary" size="lg" block>Sign Up</Button>
                <p>By signing up, you agree to the Terms of Service</p>
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
  actions: bindActionCreators({ ...AuthActions, route: RouteActions }, dispatch),
});

export default connect(mapState, mapDispatch)(SignUpContainer);
