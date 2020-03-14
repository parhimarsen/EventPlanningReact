import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return props.value === index && <Box p={2}>{children}</Box>;
}
const useStyles = makeStyles(theme => ({}));

const Navigation = props => {
  return (
    <Box>
      <AppBar position="static">
        <Tabs
          value={props.value}
          onChange={props.handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            value={"/admin/users"}
            label="Users"
            component={Link}
            to={`${props.url}/users`}
          />
          <Tab
            value={"/admin/events"}
            label="Events"
            component={Link}
            to={`${props.url}/events`}
          />
        </Tabs>
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
