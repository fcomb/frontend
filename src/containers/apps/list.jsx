import React, { Component } from 'react';

import Helmet from 'react-helmet';

import Card from './card';

import UI from 'components/ui';
const { Grid, Button } = UI;

import styles from 'styles/containers';

// created
// starting
// running
// partly_running
// stopping
// stopped
// restarting
// redeploying
// scaling
// terminating
// terminated

const apps = [{
  id: 1,
  name: `scala-app-long-fucking-name`,
  state: `running`,
}, {
  id: 2,
  name: `frontend-app`,
  state: `stopped`,
}, {
  id: 3,
  name: `cem-postgres-db`,
  state: `running`,
}, {
  id: 4,
  name: `mysql-db`,
  state: `running`,
}, {
  id: 5,
  name: `laravel-app`,
  state: `stopping`,
}];

class AppsContainer extends Component {
  render() {
    return (
      <section>
        <Helmet title="Applications" />

        <Grid.Container>
          <header className={styles.header}>
            <Grid.Row>
              <Grid.Col xs={10}>
                <h1 className={styles.headerTitle}>Applications</h1>
              </Grid.Col>
              <Grid.Col xs={10} className={styles.textRight}>
                <Button kind="success" size="lg" className={styles.headerButton} to="/apps/create">Create Application</Button>
              </Grid.Col>
            </Grid.Row>
          </header>
        </Grid.Container>

        <div className={styles.sectionWrapper}>
          <div className={styles.section}>
            <div className={styles.sectionInner}>
              <Grid.Container>
                <Grid.Row>
                  {apps.map((app) => (
                    <Grid.Col xs={5}>
                      <Card data={app} />
                    </Grid.Col>
                  ))}
                </Grid.Row>
              </Grid.Container>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AppsContainer;
