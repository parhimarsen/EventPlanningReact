import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import EventContainer from "../../containers/EventContainers/EventContainer";
import EditEventModalContainer from "../../containers/EventContainers/Modal/EditEventModalContainer";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    margin: theme.spacing(1),
    maxWidth: 345
  },
  box: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))"
  }
}));

const EventList = props => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.box}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5">Add new Event</Typography>
          </CardContent>
          <CardActions>
            <Fab
              onClick={()=>props.handleEventAdd()}
              aria-label="Add"
              size="large"
              color="primary"
            >
              <AddIcon />
            </Fab>
          </CardActions>
        </Card>
        {props.events.map((event, index) => {
          return (
            <EventContainer
              key={index}
              handleEventAdd={props.handleEventAdd}
              handleEventDelete={props.handleEventDelete}
              handleFieldAdd={props.handleFieldAdd}
              handleFieldDelete={props.handleFieldDelete}
              event={event}
              isAddOrEdit={props.isAddOrEdit}
            />
          );
        })}
      </Box>
      {props.isAdd === true && (
        <EditEventModalContainer
          isAdd={props.isAdd}
          openModal={true}
          handleEventAdd={props.handleEventAdd}
          handleEventAddModalClose={props.handleEventAddModalClose}
        />
      )}
    </>
  );
};

export default EventList;
