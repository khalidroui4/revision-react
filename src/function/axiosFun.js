import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function AxiosFun() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data));
  }, []);
  return (
    <div>
      <h1>function axios.get("") method 👉</h1>

      {user.map((u, index) => (
        <div key={index} style={{display:"flex"}}>
          <h2>user numer {u.id} : </h2>
          <p style={{marginTop:"28px"}}>{u.name}</p>
          <Button onClick={()=>navigate("/details/"+u.id)}>view more details</Button>
        </div>
      ))}
    </div>
  );
}

export default AxiosFun;
