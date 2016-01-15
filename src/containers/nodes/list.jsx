import React, { Component } from 'react';
import Helmet from 'react-helmet';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NodesActions from 'actions/nodes'; // FIXME: need to be * as

import List from 'components/nodes/list';

import UI from 'components/ui';
const { Grid, Modal, Button } = UI;

import styles from 'styles/containers';

class NodesContainer extends Component {
  componentWillMount() {
    this.props.actions.loadNodes();
  }

  render() {
    const { nodes } = this.props.state;
    const { items = [], isFetching, errors } = nodes.list;

    return (
      <section>
        <Helmet title="Nodes" />

        <Grid.Container>
          <header className={styles.header}>
            <Grid.Row>
              <Grid.Col xs={10}>
                <h1 className={styles.headerTitle}>Nodes</h1>
              </Grid.Col>
              <Grid.Col xs={10} className={styles.textRight}>
                <Modal size="lg" openByClickOn={<Button kind="success" size="lg" className={styles.headerButton}>Connect Node</Button>} closeOnEsc closeOnOutsideClick>
                  <pre style={{ whiteSpace: `normal`, textAlign: `center` }}>curl -Ls https://agent.fcomb.io/ | sudo -H sh -s tkn_j2UESTi9IA944HLYJG2SCZNfa5o5kZFy66Co3sz3lbDDLFqueej8Ailv5eK5faycs0oaW0wis2aj6Ed2yeS9Hu2quicH5Gis</pre>
                </Modal>
              </Grid.Col>
            </Grid.Row>
          </header>
        </Grid.Container>

        <div className={styles.sectionWrapper}>
          <div className={styles.section}>
            <Grid.Container>
              {isFetching && !items.length && <UI.Loading />}
              {!isFetching && errors && errors.map((error) => <p>{error}</p>)}
            </Grid.Container>

            <div className={styles.sectionInner}>
              {!isFetching && !!items.length && <List items={items} />}
            </div>
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
