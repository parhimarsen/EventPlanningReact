import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import AddFieldConrainer from "../../../containers/EventContainers/Modal/AddFieldContainer";
import FieldListContainer from "../../../containers/EventContainers/Modal/FieldListContainer";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const EditEventModal = props => {
  const classes = useStyles();
  const DateTime = {
    Date: props.event.DateTime,

    toString: function() {
      return "" + this.Date;
    }
  };
  const reverseDate = DateTime.toString()
    .split("[-]")
    .reverse()
    .join("[-]");
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.modal}
      open={props.openModal}
      onClose={props.handleClose}
      keepMounted={true}
    >
      <div className={classes.paper}>
        <h1 id="simple-modal-titlee">Edit Event</h1>
        <form id="simple-modal-description" className={classes.container}>
          <TextField
            id="standard-read-only-input"
            label="Name"
            type="text"
            defaultValue={props.event.Name}
            className={classes.textField}
          />
          <TextField
            id="standard-read-only-input"
            label="Date"
            type="date"
            defaultValue={reverseDate}
            className={classes.textField}
          />
        </form>
        <FieldListContainer
          event={props.event}
          handleFieldDelete={props.handleFieldDelete}
        />
        <AddFieldConrainer
          handleFieldAddEventMenu={props.handleFieldAddEventMenu}
          handleFieldAdd={props.handleFieldAdd}
          event={props.event}
        />
      </div>
    </Modal>
  );
};

export default EditEventModal;
