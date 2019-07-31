import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";

// Dashboard Passes down to EventList,
// Which Passes down to EventListItem,
// Which Passes down to EventListAttendee
// using props to map over the static data we have in our EventDashboard
// passing in event.id and the event data to EventListItem

class EventList extends Component {
  render() {
    return (
      <Fragment>
        {this.props.events.map(event => (
          <EventListItem key={event.id} event={event} />
        ))}
      </Fragment>
    );
  }
}

export default EventList;
