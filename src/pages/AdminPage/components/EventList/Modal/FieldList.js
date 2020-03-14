import React from "react";
import FieldContainer from "../../../containers/EventContainers/Modal/FieldContainer";

const FieldList = props => {
  return (
    <>
      <h2>Fields</h2>
      {props.event.Fields.map((field, index) => {
        return (
          <FieldContainer
            key={index}
            event={props.event}
            field={field}
            isAdd={props.isAdd}
            handleFieldDelete={props.handleFieldDelete}
          />
        );
      })}
    </>
  );
};

export default FieldList;
