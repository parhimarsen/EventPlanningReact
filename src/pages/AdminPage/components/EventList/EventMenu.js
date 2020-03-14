import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import EditEventModalContainer from "../../containers/EventContainers/Modal/EditEventModalContainer";
import DeleteEventContainer from "../../containers/EventContainers/Modal/DeleteEventContainer";

const EventMenu = props => {
  return (
    <>
      <div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={props.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={props.anchorEl}
          keepMounted
          open={!!props.anchorEl}
          onClose={props.handleClose}
          PaperProps={{
            style: {
              maxHeight: 48 * 2,
              width: 100
            }
          }}
        >
          {props.options.map(option => (
            <MenuItem
              key={option}
              onClick={() => {
                props.handleOptionClick(option);
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
      {props.selectedOption === "Edit" && !props.secondAnchorEl && (
        <EditEventModalContainer
          handleFieldAdd={props.handleFieldAdd}
          handleFieldDelete={props.handleFieldDelete}
          event={props.event}
          openModal={true}
          handleEditModalClose={props.handleEditModalClose}
          handleFieldAddEventMenu={props.handleFieldAddEventMenu}
        />
      )}
      {props.selectedOption === "Delete" && !props.secondAnchorEl && (
        <DeleteEventContainer
          event={props.event}
          openModal={true}
          handleEventDelete={props.handleEventDelete}
          handleEditModalClose={props.handleEditModalClose}
        />
      )}
    </>
  );
};

export default EventMenu;
