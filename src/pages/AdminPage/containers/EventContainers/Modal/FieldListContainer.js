import React from "react";
import FieldList from "../../../components/EventList/Modal/FieldList";

class FieldListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FieldList
        handleFieldDelete={this.props.handleFieldDelete}
        isAdd={this.props.isAdd}
        event={this.props.event}
      />
    );
  }
}

export default FieldListContainer;
