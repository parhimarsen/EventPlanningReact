import React from "react";
import EventList from "../components/EventList";

class EventListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      expanded: false
    };
  }

  componentDidMount() {
    this.refreshData();
  }

  handleExpandClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  refreshData() {
    // fetch("http://localhost:51560/api/events")
    //   .then(response => response.json())
    //   .then(events => {
    //     this.setState({ events: events });
    //   });
    this.setState({ events: this.state.events });
  }

  render() {
    return (
      <EventList
        events={this.state.events}
        handleExpandClick={this.handleExpandClick}
      />
    );
  }
}

export default EventListContainer;
