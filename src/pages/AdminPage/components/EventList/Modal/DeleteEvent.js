import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

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
  button: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3)
  }
}));

const DeleteEvent = props => {
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
        <h1 id="simple-modal-titlee">Delete Event</h1>
        <p>Are you sure want to delete {props.event.Name} event?</p>
        <div>
          <Button
            className={classes.button}
            onClick={props.deleteEvent}
            variant="contained"
            color="primary"
          >
            Yes
          </Button>
          <Button
            className={classes.button}
            onClick={props.handleClose}
            variant="contained"
            color="secondary"
          >
            No
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteEvent;
