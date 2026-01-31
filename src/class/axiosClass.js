import axios from "axios";
import React, { Component } from "react";

export class AxiosClass extends Component {
  constructor(props) {
    super(props);
      this.state = {
        users: [],
      };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => this.setState({ users: res.data }));
  }
  render() {
    return (
      <div>
        <h1>Class axios.get("") method 👉</h1>

        {this.state.users.map((u, index) => (
          <div key={index}>
            <h2>user numer {u.id} :</h2>
            <p>name : {u.name}</p>
            <p>username : {u.username}</p>
            <p>email : {u.email}</p>
            <p>Phone : {u.phone}</p>
            <p>his city {u.address.city}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default AxiosClass;
