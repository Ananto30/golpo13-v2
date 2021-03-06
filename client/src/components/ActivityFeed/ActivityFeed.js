import React from "react";

import { inject, observer } from "mobx-react";

import ActivityPlaceholder from "../Loaders/ActivityPlaceholder";
import FeedList from "./FeedList";

class ActivityFeed extends React.Component {
  componentDidMount() {
    const { activityStore } = this.props;
    if (activityStore.activities.length === 0) {
      activityStore.loadActivities();
    }
  }

  render() {
    const { activityStore } = this.props;
    if (activityStore.isLoadingActivities) return <ActivityPlaceholder />;
    return (
      <>
        <FeedList activities={activityStore.activities} />
      </>
    );
  }
}

export default inject("commonStore", "activityStore")(observer(ActivityFeed));
