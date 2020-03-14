import React from "react";
import Switch from "@material-ui/core/Switch";

const AdminPageClientItem = props => {
  const [state, setState] = React.useState({
    checkedA: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Switch
      checked={state.checkedA}
      onChange={handleChange("checkedA")}
      value="checkedA"
      inputProps={{ "aria-label": "secondary checkbox" }}
    />
  );
};

export default AdminPageClientItem;
