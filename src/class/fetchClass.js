import React, { Component } from 'react'

 class FetchClass extends Component {
  constructor(props){
    super(props);
    this.state = {
      users : []
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>this.setState({users : data}))
  }
  render() {
    return (
      <div>
        <h1>Class fetch("") method 👉</h1>

        {this.state.users.map((u, index) => (
          <div key={index}>
            <h2>user numer {u.id} :</h2>
            <p>name : {u.name}</p>
            <p>username : {u.username}</p>
            <p>email : {u.email}</p>
            <p>Phone : {u.phone}</p>
          </div>
        ))}
      </div>
    )
  }
}
export default FetchClass