import React from "react";
import { Route } from "react-router";
import { Grid } from "semantic-ui-react";
import styles from "../chat.module.css";

import ActivityFeed from "../components/ActivityFeed/ActivityFeed";
import MainNavbar from "../components/Navigation/MainNavbar";

const ActivityLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <>
        <MainNavbar />
        <Grid stackable>
          <Component {...props} />
          <Grid.Column
            width={4}
            className={styles.chathistory}
            only="computer"
          >
            <ActivityFeed />
          </Grid.Column>
        </Grid>
      </>
    )}
  />
);

export default ActivityLayout;
