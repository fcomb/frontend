import React, { Component } from 'react';
import Helmet from 'react-helmet';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NodesActions from 'actions/nodes';

import Create from 'containers/nodes/create';
import List from 'components/nodes/list';

import cn from 'classnames';
import UI from 'components/ui';
import styles from 'styles/containers';

const { Grid, Modal, Button } = UI;

class NodesContainer extends Component {
  componentWillMount() {
    this.props.actions.loadNodes();
  }

  render() {
    const { nodes } = this.props.state;
    const { items, isFetching, errors } = nodes.list;

    return (
      <section>
        <Helmet title="Nodes" />

        <Grid.Container>
          <header className={styles.header}>
            <Grid.Row>
              <Grid.Col xs={10}>
                <h1 className={styles.headerTitle}>Nodes</h1>
              </Grid.Col>
              {items && !!items.length &&
                <Grid.Col xs={10} className={styles.textRight}>
                  <Modal size="lg" openByClickOn={<Button kind="success" size="lg" className={styles.headerButton}>Connect New Node</Button>} closeOnEsc closeOnOutsideClick>
                    <Create />
                  </Modal>
                </Grid.Col>
              }
            </Grid.Row>
          </header>
        </Grid.Container>

        <div className={styles.section}>
          <Grid.Container>
            {items && !items.length &&
              <div className={cn(styles.pushedTop10, styles.textCenter)}>
                <h1>You don't have connected nodes 😧</h1>

                <Grid.Row className={styles.pushedTop3}>
                  <Grid.Col sm={8} smOffset={6}>
                    <Modal size="lg" openByClickOn={<Button kind="success" size="lg" block>Connect New Node</Button>} closeOnEsc closeOnOutsideClick>
                      <Create />
                    </Modal>
                  </Grid.Col>
                </Grid.Row>
              </div>
            }

            {errors && errors.map((error) => <p>{error}</p>)}
            {isFetching && <UI.Loading />}
          </Grid.Container>

          <div className={styles.sectionInner}>
            <List items={items} />
          </div>
        </div>
      </section>
    );
  }
}

const pickState = ({ nodes }) => ({
  state: { nodes },
});

const pickActions = (dispatch) => ({
  actions: bindActionCreators(NodesActions, dispatch),
});

export default connect(pickState, pickActions)(NodesContainer);
