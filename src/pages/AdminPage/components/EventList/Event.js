import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EventMenuContainer from "../../containers/EventContainers/EventMenuContainer";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    margin: theme.spacing(1),
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const Event = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <EventMenuContainer
            handleEventDelete={props.handleEventDelete}
            handleFieldAdd={props.handleFieldAdd}
            handleFieldDelete={props.handleFieldDelete}
            event={props.event}
          />
        }
        title={props.event.Name}
        subheader={props.event.DateTime}
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent></CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" color="textSecondary" component="p">
          Creater: {props.event.User.Email}
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: props.expanded
          })}
          onClick={props.handleExpandClick}
          aria-expanded={props.expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={props.expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {props.event.Fields.map((field, index) => {
            return (
              <Typography
                key={index}
                variant="body2"
                color="textSecondary"
                component="p"
                paragraph
              >
                {field.Name} : {field.Value}
              </Typography>
            );
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Event;
