import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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

const AddEventModal = props => {
  const classes = useStyles();

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
        <h1 id="simple-modal-titlee">Add Event</h1>
        <form id="simple-modal-description" className={classes.container}>
          <TextField
            id="text"
            label="Enter Name"
            type="text"
            error={props.nameError}
            value={props.name}
            helperText={props.eventNameError}
            className={classes.textField}
            onChange={event => props.handleChangeName(event.target.value)}
          />
          <TextField
            id="date"
            label=""
            type="date"
            error={props.dateError}
            value={props.date}
            helperText={props.eventDateError}
            className={classes.textField}
            onChange={event => props.handleChangeDate(event.target.value)}
          />
        </form>
        <FieldListContainer
          event={props.event}
          isAdd={props.isAdd}
          handleFieldDelete={props.handleFieldDelete}
        />
        <AddFieldConrainer
          handleFieldAdd={props.handleFieldAdd}
          event={props.event}
          isAdd={props.isAdd}
        />
        <br />
        <Button
          onClick={props.handleEventAdd}
          variant="contained"
          color="primary"
        >
          Create
        </Button>
      </div>
    </Modal>
  );
};

export default AddEventModal;
