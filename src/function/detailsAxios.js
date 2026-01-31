import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import styled from "styled-components";

const Card = styled.div`
  background-color: grey;
  width: fit-content;
  padding: 30px;
  border-radius: 15px;
  margin: 10% 40%;
`;
function DetailsAxios() {
  const { idU } = useParams();
  const navigate = useNavigate();
  const [userD, setUserD] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + idU)
      .then((res) => setUserD(res.data));
  }, [idU]);

  if (!userD) return <h1>loading user.....</h1>;
  return (
    <Card>
      <h2>user numer {userD.id} :</h2>
      <p>name : {userD.name}</p>
      <p>username : {userD.username}</p>
      <p>email : {userD.email}</p>
      <p>Phone : {userD.phone}</p>
      <Button onClick={() => navigate("/axiosFunc")}>
        Return to the user list
      </Button>
    </Card>
  );
}

export default DetailsAxios;
