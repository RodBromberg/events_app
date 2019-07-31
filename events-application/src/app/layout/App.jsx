import React, { Component, Fragment } from "react";
import { Button, Container } from "semantic-ui-react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import EventForm from "../../features/event/EventForm/EventForm";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className="main">
          <EventDashboard />
          <EventForm />
        </Container>
      </Fragment>
    );
  }
}
export default App;
