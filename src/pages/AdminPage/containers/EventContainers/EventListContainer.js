import React from "react";
import EventList from "../../components/EventList/EventList";

class EventListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isAdd: false,
      expanded: false
    };
  }

  componentDidMount() {
    this.refreshData();
  }

  handleExpandClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  handleEventAddModalClose = () => {
    this.setState({ isAdd: false });
  };

  refreshData() {
    // fetch("http://localhost:51560/api/events")
    //   .then(response => response.json())
    //   .then(events => {
    //     this.setState({ events: events });
    //   });
    this.setState({ events: this.state.events });
  }

  handleFieldAdd = (toggledEvent, field) => {
    this.setState(state => {
      const changedEvents = state.events.map(event => {
        if (event.Id === toggledEvent.Id) {
          event.Fields = event.Fields.concat(field);
        }
        return event;
      });
      return { events: changedEvents };
    });
  };

  handleFieldDelete = (toggledEvent, field) => {
    this.setState(state => {
      const changedEvents = state.events.map(event => {
        if (event.Id === toggledEvent.Id) {
          const assignEvent = Object.assign({}, event);
          assignEvent.Fields = assignEvent.Fields.filter(
            item => item.Id !== field.Id
          );
          return assignEvent;
        }
        return event;
      });
      return { events: changedEvents };
    });
  };

  handleEventAdd = toggledEvent => {
    this.setState(state => {
      if (toggledEvent) {
        return {
          events: state.events.concat(toggledEvent)
        };
      }
      return { isAdd: true };
    });
  };

  handleEventDelete = toggledEvent => {
    this.setState(state => {
      return {
        events: state.events.filter(event => event.Id !== toggledEvent.Id)
      };
    });
  };

  render() {
    return (
      <EventList
        events={this.state.events}
        isAdd={this.state.isAdd}
        handleEventAddModalClose={this.handleEventAddModalClose}
        handleEventAdd={this.handleEventAdd}
        handleEventDelete={this.handleEventDelete}
        handleFieldAdd={this.handleFieldAdd}
        handleFieldDelete={this.handleFieldDelete}
        handleExpandClick={this.handleExpandClick}
      />
    );
  }
}

export default EventListContainer;
