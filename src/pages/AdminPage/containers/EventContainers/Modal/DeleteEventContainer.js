import React from "react";
import DeleteEvent from "../../../components/EventList/Modal/DeleteEvent";

class DeleteEventContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: props.openModal
    };
  }

  handleClose = () => {
    this.setState({ openModal: false });
    this.props.handleEditModalClose();
  };

  deleteEvent = () => {
    // fetch("http://localhost:51560/api/events", {
    //   method: "DELETE",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(this.props.event)
    // })
    //   .then(this.props.handleEventDelete(this.props.event))
    //   .then(this.setState({ openModal: false }));
    this.props.handleEventDelete(this.props.event);
    this.setState({ openModal: false });
  };

  render() {
    return (
      <DeleteEvent
        openModal={this.state.openModal}
        event={this.props.event}
        deleteEvent={this.deleteEvent}
        handleClose={this.handleClose}
      />
    );
  }
}

export default DeleteEventContainer;
