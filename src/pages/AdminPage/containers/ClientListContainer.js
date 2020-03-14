import React from "react";
import ClientList from "../components/ClientList/ClientList";

class ClientListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Email", field: "email" },
        { title: "Password", field: "password" }
      ],
      users: []
    };
  }

  componentDidMount() {
    this.refreshData();
  }

  refreshData = () => {
    fetch("http://localhost:51560/api/users")
      .then(response => response.json())
      .then(data => {
        const usersData = data.map(user => {
          return { id: user.Id, email: user.Email, password: user.Password };
        });
        this.setState({
          users: usersData
        });
      });
  };

  onRowAdd = newUser => {
    return fetch("http://localhost:51560/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(() => this.refreshData());
  };

  onRowUpdate = newUser => {
    return fetch("http://localhost:51560/api/users", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(() => this.refreshData());
  };

  onRowDelete = oldUser => {
    return fetch("http://localhost:51560/api/users", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(oldUser)
    }).then(() => this.refreshData());
  };

  render() {
    return (
      <ClientList
        onRowAdd={this.onRowAdd}
        onRowUpdate={this.onRowUpdate}
        onRowDelete={this.onRowDelete}
        refreshData={this.refreshData}
        columns={this.state.columns}
        users={this.state.users}
      />
    );
  }
}

export default ClientListContainer;
