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

const Login = props => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.loginContainer}>
        <form onSubmit={event => props.handleSubmit(event)}>
          <Typography variant="h4">Just Login</Typography>
          <TextField
            className={classes.textField}
            placeholder="Login or Email"
            id="standard-basic"
            label="Login"
            onChange={event => props.handleChangeLogin(event.target.value)}
          />
          <TextField
            className={classes.textField}
            id="standard-basic"
            label="Password"
            type="password"
            onChange={event => props.handleChangePassword(event.target.value)}
          />
          <br />
          <Button className={classes.button} variant="contained" type="submit">
            Log In
          </Button>{" "}
        </form>
        <br />
        <div>
          <Link to="/registration" component="a">
            Registrate
          </Link>
          &nbsp; &nbsp;
          <Link to="/admin" component="a">
            Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
