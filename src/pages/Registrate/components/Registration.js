import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  textField: {
    width: "200px"
  },
  button: {
    backgroundColor: "lime",
    width: "120px"
  }
}));

const Registration = () => {
  const classes = useStyles();
  return (
    <div className={classes.loginContainer}>
      <Typography variant="h4">Just Registrate</Typography>
      <TextField
        className={classes.textField}
        placeholder="Login or Email"
        id="standard-basic"
        label="Email"
      />
      <TextField
        className={classes.textField}
        id="standard-basic"
        label="Password"
        type="password"
      />
      <TextField
        className={classes.textField}
        id="standard-basic"
        label="Confirm Password"
        type="password"
      />
      <br />
      <Button className={classes.button} variant="contained">
        Registrate
      </Button>
      <br />
      <div>
        <Link to="/login" component="a">
          Log In
        </Link>
        &nbsp; &nbsp;
        <Link to="/admin" component="a">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Registration;
