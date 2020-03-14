import React from "react";
import Field from "../../../components/EventList/Modal/Field";

class FieldContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: props.field.Name,
      value: props.field.Value,
      fieldNameError: "",
      nameError: false,
      fieldValueError: "",
      valueError: false
    };
  }

  deleteField = () => {
    if(this.props.isAdd){
      this.props.handleFieldDelete(this.props.field);
    }
    if (!this.props.isAdd) {
      const eventField = {
        Event: this.props.event,
        Field: this.props.field
      };
      fetch("http://localhost:51560/api/fields", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(eventField)
      }).then(this.props.handleFieldDelete(this.props.event, this.props.field));
    }
  };

  render() {
    return (
      <Field
        deleteField={this.deleteField}
        fieldName={this.state.name}
        fieldValue={this.state.value}
      />
    );
  }
}

export default FieldContainer;
