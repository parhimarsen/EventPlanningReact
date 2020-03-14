import React from "react";
import EventMenu from "../../components/EventList/EventMenu";

class EventMenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["Edit", "Delete"],
      selectedOption: "",
      anchorEl: null,
      secondAnchorEl: null,
    };
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
      secondAnchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleFieldAdd = () => {
    this.setState({ selectedOption: "Edit"});
  };

  handleEditModalClose = () => {
    this.setState({ selectedOption: "", secondAnchorEl: null });
  };

  handleOptionClick = selectedOption => {
    this.setState({secondAnchorEl:this.state.anchorEl, selectedOption: selectedOption, anchorEl: null });
  };

  render() {
    return (
      <EventMenu
        options={this.state.options}
        selectedOption={this.state.selectedOption}
        event={this.props.event}
        anchorEl={this.state.anchorEl}
        handleClick={this.handleClick}
        handleClose={this.handleClose}
        handleOptionClick={this.handleOptionClick}
        handleEventDelete={this.props.handleEventDelete}
        handleFieldAdd={this.props.handleFieldAdd}
        handleFieldDelete={this.props.handleFieldDelete}
        handleFieldAddEventMenu={this.handleFieldAdd}
        handleEditModalClose={this.handleEditModalClose}
      />
    );
  }
}

export default EventMenuContainer;
