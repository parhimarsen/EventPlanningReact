import React from "react";
import Event from "../../components/EventList/Event";

class EventContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { expanded: false};
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <Event
        event={this.props.event}
        expanded={this.state.expanded}
        handleEventDelete={this.props.handleEventDelete}
        handleFieldAdd={this.props.handleFieldAdd}
        handleFieldDelete={this.props.handleFieldDelete}
        handleExpandClick={this.handleExpandClick}
      />
    );
  }
}

export default EventContainer;
