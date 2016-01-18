import React, { Component } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routeActions as RouteActions } from 'redux-simple-router';
import * as AuthActions from 'actions/auth';

import { signInForm } from 'constants/auth';
import { reduxForm } from 'redux-form';

import cn from 'classnames';
import UI from 'components/ui';
import styles from 'styles/containers';

const { Grid, Form, Button } = UI;

class SignInContainer extends Component {
  componentWillReceiveProps(props) {
    if (props.state.auth.token && this.props.state.auth.token !== props.state.auth.token) {
      this.props.actions.routePush(`/`);
    }
  }

  handleOnSubmit() {
    const { actions, values } = this.props;

    return new Promise((resolve, reject) => {
      actions.signIn(values).then((response = {}) => {
        if (response.errors) {
          const errors = {};

          response.errors.map((error) => errors[error.param] = error.message);

          reject(errors);
        } else {
          resolve();
        }
      });
    });
  }

  render() {
    const { fields, handleSubmit } = this.props;

    return (
      <section>
        <Grid.Container>
          <header className={styles.header}>
            <Grid.Row>
              <Grid.Col xs={20} className={styles.textCenter}>
                <h1 className={styles.headerTitle}>Sign In</h1>
              </Grid.Col>
            </Grid.Row>
          </header>
        </Grid.Container>

        <div className={styles.section}>
          <Grid.Container>
            <Grid.Row>
              <Grid.Col sm={8} smOffset={6}>
                <Form.Container className={styles.pushedTop3} onSubmit={handleSubmit(::this.handleOnSubmit)}>
                  <Form.Group size="lg" kind={fields.email.touched && !!fields.email.error && `error`}>
                    <Form.Input name="email" type="email" placeholder="E-mail address" block {...fields.email} />
                    {fields.email.touched && fields.email.error && <Form.Helper>{fields.email.error}</Form.Helper>}
                  </Form.Group>

                  <Form.Group size="lg" kind={fields.password.touched && !!fields.password.error && `error`}>
                    <Form.Input name="password" type="password" placeholder="Password" block {...fields.password} />
                    {fields.password.touched && fields.password.error && <Form.Helper>{fields.password.error}</Form.Helper>}
                  </Form.Group>

                  <Button type="submit" kind="primary" size="lg" block>Sign In</Button>
                </Form.Container>

                <p className={cn(styles.textCenter, styles.pushedTop5)}>
                  Don't have account? <Link to="/sign_up">Sign Up</Link>.
                </p>
              </Grid.Col>
            </Grid.Row>
          </Grid.Container>
        </div>
      </section>
    );
  }
}

const mapState = ({ auth }) => ({
  state: { auth },
});

const mapDispatch = (dispatch) => ({
  actions: bindActionCreators({ ...AuthActions, routePush: RouteActions.push }, dispatch),
});

export default reduxForm(signInForm)(connect(mapState, mapDispatch)(SignInContainer));
