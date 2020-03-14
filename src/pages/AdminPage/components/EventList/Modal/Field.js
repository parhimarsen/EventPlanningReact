import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
}));

const Field = props => {
  const classes = useStyles();
  return (
    <>
      <form className={classes.container} noValidate>
        <TextField
          id="standard-read-only-input"
          label="Field Name"
          className={classes.textField}
          value={props.fieldName}
        />
        <TextField
          id="standard-read-only-input"
          label="Field Value"
          className={classes.textField}
          value={props.fieldValue}
        />
        <DeleteOutlinedIcon onClick={props.deleteField} fontSize="large" />
      </form>
    </>
  );
};

export default Field;
