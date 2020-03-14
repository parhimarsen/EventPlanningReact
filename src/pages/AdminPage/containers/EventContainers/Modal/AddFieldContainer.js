import React from "react";
import AddField from "../../../components/EventList/Modal/AddField";
import { v4 as uuidv4 } from "uuid";

class AddFieldConrainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      event: props.event,
      name: "",
      value: "",
      fieldNameError: "",
      nameError: false,
      fieldValueError: "",
      valueError: false,
      handleFieldAdd: props.handleFieldAdd
    };
  }

  componentDidMount() {
    this.validate();
  }

  componentDidUpdate() {
    this.validate();
  }

  handleChangeName = value => {
    this.setState({ name: value });
  };

  handleChangeValue = value => {
    this.setState({ value: value });
  };

  addField = () => {
    if (this.props.isAdd) {
      if (this.state.nameError === false && this.state.valueError === false) {
        const Id = uuidv4();
        const Field = {
          Id: Id,
          Name: this.state.name,
          Value: this.state.value
        };
        this.state.handleFieldAdd(Field);
        this.setState({ name: "", value: "" });
      }
    }
    if (!this.props.isAdd) {
      const Id = uuidv4();
      const eventField = {
        Event: this.state.event,
        Field: {
          Id: Id,
          Name: this.state.name,
          Value: this.state.value
        }
      };
      const Event = this.state.event;
      const Field = {
        Id: Id,
        Name: this.state.name,
        Value: this.state.value
      };
      if (this.state.nameError === false && this.state.valueError === false) {
        fetch("http://localhost:51560/api/fields", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(eventField)
        })
          .then(this.props.handleFieldAddEventMenu())
          .then(this.state.handleFieldAdd(Event, Field));
        this.setState({ name: "", value: "" });
      }
    }
  };

  validate = () => {
    if (this.state.name.length < 1) {
      this.setState({ fieldNameError: "Why empty?", nameError: true });
    } else {
      this.setState({ fieldNameError: "", nameError: false });
    }
    if (this.state.value.length < 1) {
      this.setState({ fieldValueError: "Why empty?", valueError: true });
    } else {
      this.setState({ fieldValueError: "", valueError: false });
    }
  };
  
  render() {
    return (
      <AddField
        nameError={this.state.nameError}
        fieldNameError={this.state.fieldNameError}
        fieldName={this.state.name}
        handleChangeName={this.handleChangeName}
        valueError={this.state.valueError}
        fieldValueError={this.state.fieldValueError}
        fieldValue={this.state.value}
        handleChangeValue={this.handleChangeValue}
        validate={this.validate}
        addField={this.addField}
      />
    );
  }
}

export default AddFieldConrainer;
