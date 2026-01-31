import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Countstate() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  useEffect(()=>{
    console.log("Did mount"); 
  },[]);                                     //? [] Runs once the components mount/displayed on the screen
  useEffect(()=>{
    console.log("count changed" ,"to",count)
  },[count]);                                //? [x] Runs once that x changes 
  useEffect(()=>{
    console.log("Did render"); 
  });                                        //? (there is no []) so that useEffect runs at every render
  const Add = () => {
    setCount(count + 1)
  }
  const Minus = () => {
    setCount(count - 1)
  }
  const Reset = () => {
    setCount(0)
  }
  return (
    <div>
      <h1>Hello To CountPageFunction</h1>
      <span style={{ display: "flex" }}>
        <p>you clicked this button: {count} times</p>
        <Button onClick={() => Add()}>+</Button>
        <Button onClick={() => Minus()}>-</Button>
        <Button onClick={() => Reset()}>reset</Button>
      </span>
      <Button onClick={() => navigate("/")}>retour home</Button>
    </div>
  );
}

export default Countstate;
