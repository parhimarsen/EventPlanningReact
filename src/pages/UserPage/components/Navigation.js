import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return props.value === index && <Box p={2}>{children}</Box>;
}
const useStyles = makeStyles(theme => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

const Navigation = props => {
  const classes = useStyles();
  return (
    <Box>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          value={props.value}
          onChange={props.handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            value={"/admin/events"}
            label="Events"
            component={Link}
            to={`${props.url}/events`}
          />
        </Tabs>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={props.handleMenu}
          color="inherit"
        >
          <AccountCircle /> parhimarsen@mail.ru
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={props.anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={!!props.anchorEl}
          onClose={props.handleClose}
        >
          <MenuItem onClick={props.handleClose}>Log Out</MenuItem>
        </Menu>
      </AppBar>
    </Box>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

export default Navigation;
