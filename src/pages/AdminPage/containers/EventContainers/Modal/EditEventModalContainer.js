import React from "react";
import EditEventModal from "../../../components/EventList/Modal/EditEventModal";
import AddEventModal from "../../../components/EventList/Modal/AddEventModal";
import { v4 as uuidv4 } from "uuid";

class EditEventModalContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openModal: props.openModal,
      name: "",
      date: "",
      eventNameError: "",
      nameError: false,
      eventDateError: "",
      dateError: false,
      event: {
        Id: uuidv4(),
        Name: "",
        DateTime: "",
        UserId: "6da37641-971a-40f7-bc50-5f189737c7b2",
        User: {
          Id: "6da37641-971a-40f7-bc50-5f189737c7b2",
          Email: "parhimarsen@mail.ru",
          Password: "111222",
          Role: "Admin"
        },
        Fields: []
      }
    };
  }

  componentDidMount() {
    this.validate();
  }

  componentDidUpdate() {
    this.validate();
  }

  handleChangeName = value => {
    const eventCopy = JSON.parse(JSON.stringify(this.state.event));
    eventCopy.Name = value;
    this.setState({ name: value, event: eventCopy });
  };

  handleChangeDate = value => {
    const eventCopy = JSON.parse(JSON.stringify(this.state.event));
    eventCopy.DateTime = value.toString();
    this.setState({ date: value, event: eventCopy });
  };

  validate = () => {
    if (this.state.name.length < 1) {
      this.setState({ eventNameError: "Why empty?", nameError: true });
    } else {
      this.setState({ eventNameError: "", nameError: false });
    }
    if (this.state.date.length < 1) {
      this.setState({ eventDateError: "Why empty?", dateError: true });
    } else {
      this.setState({ eventDateError: "", dateError: false });
    }
  };

  handleClose = () => {
    this.setState({ openModal: false });
    if (this.props.isAdd) {
      this.props.handleEventAddModalClose();
    }
    if (!this.props.isAdd) {
      this.props.handleEditModalClose();
    }
  };

  handleFieldAdd = field => {
    this.setState(state => {
      const assignEvent = Object.assign({}, state.event);
      state.event.Fields = state.event.Fields.concat(field);
      return { events: assignEvent };
    });
  };

  handleFieldDelete = field => {
    this.setState(state => {
      const assignEvent = Object.assign({}, state.event);
      assignEvent.Fields = assignEvent.Fields.filter(
        item => item.Id !== field.Id
      );
      return { event: assignEvent };
    });
  };

  addEvent = () => {
    if (this.state.nameError === false && this.state.dateError === false) {
      fetch("http://localhost:51560/api/events", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.event)
      })
        .then(() => this.props.handleEventAdd(this.state.event))
        .then(() => this.setState({ openModal: false }))
        .then(() => this.props.handleEventAddModalClose());
    }
  };

  render() {
    return this.props.isAdd ? (
      <AddEventModal
        openModal={this.state.openModal}
        event={this.state.event}
        handleClose={this.handleClose}
        isAdd={this.props.isAdd}
        handleEventAdd={this.addEvent}
        handleFieldDelete={this.handleFieldDelete}
        handleFieldAdd={this.handleFieldAdd}
        name={this.state.name}
        date={this.state.date}
        eventNameError={this.state.eventNameError}
        nameError={this.state.nameError}
        eventDateError={this.state.eventDateError}
        dateError={this.state.dateError}
        handleChangeName={this.handleChangeName}
        handleChangeDate={this.handleChangeDate}
      />
    ) : (
      <EditEventModal
        openModal={this.state.openModal}
        event={this.props.event}
        handleClose={this.handleClose}
        handleFieldAdd={this.props.handleFieldAdd}
        handleFieldDelete={this.props.handleFieldDelete}
        handleFieldAddEventMenu={this.props.handleFieldAddEventMenu}
      />
    );
  }
}

export default EditEventModalContainer;
