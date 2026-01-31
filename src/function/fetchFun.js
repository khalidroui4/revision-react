import React, { useEffect, useState } from "react";

function FetchFun() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>function fetch("") method 👉</h1>

      {users.map((us, index) => (
        <div key={index}>
          <h2>user numer {us.id} :</h2>
          <p>name : {us.name}</p>
          <p>username : {us.username}</p>
          <p>email : {us.email}</p>
          <p>Phone : {us.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchFun;
