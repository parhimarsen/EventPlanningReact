import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  fab: {
    margin: "9px"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
}));

const AddField = props => {
  const classes = useStyles();
  return (
    <>
      <Fab
        className={classes.fab}
        aria-label="Add"
        size="medium"
        color="primary"
        onClick={props.addField}
      >
        <AddIcon />
      </Fab>
      <form className={classes.container} noValidate>
        <TextField
          id="standard-required"
          label="Field Name"
          className={classes.textField}
          error={props.nameError}
          value={props.fieldName}
          helperText={props.fieldNameError}
          onChange={event => props.handleChangeName(event.target.value)}
        />
        <TextField
          id="standard-required"
          label="Field Value"
          className={classes.textField}
          error={props.valueError}
          value={props.fieldValue}
          helperText={props.fieldValueError}
          onChange={event => props.handleChangeValue(event.target.value)}
        />
      </form>
    </>
  );
};

export default AddField;
