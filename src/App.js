import { Link, Route, Routes } from "react-router-dom";
import Countstate from "./function/CountFun";
import CountClass from "./class/CountClass";
import MapProps from "./function/mapProps";
import MapFun from "./function/mapFun";
import AxiosFun from "./function/axiosFun";
import FetchFun from "./function/fetchFun";
import AxiosClass from "./class/axiosClass";
import FetchClass from "./class/fetchClass";
import DetailsAxios from "./function/detailsAxios";

const products = [
    { id: 1, name: "product1", desc: "dwyuagsudygf", price: 200 },
    { id: 2, name: "product2", desc: "dwyuagsudygf", price: 400 },
    { id: 3, name: "product3", desc: "dwyuagsudygf", price: 22340 },
    { id: 4, name: "product4", desc: "dwyuagsudygf", price: 20032 },
  ];

function App() {
  return (
    <div>
      <Link to={"/"} style={{color:"white",textDecoration:"none",marginRight:"15px"}}>Home</Link>
      <Link to={"/countFunction"} style={{color:"white",textDecoration:"none",marginRight:"15px"}}>count Function</Link>
      <Link to={"/countClass"} style={{color:"white",textDecoration:"none",marginRight:"15px"}}>count Class</Link>
      <Link to={"/MapFun"} style={{color:"white",textDecoration:"none",marginRight:"15px"}}>Map function</Link>
      <Link to={"/MapProps"} style={{color:"white",textDecoration:"none",marginRight:"15px"}}>Map by Props</Link>
      <Link to={"/axiosFunc"} style={{color:"white",textDecoration:"none",marginRight:"15px"}}> axios function</Link>
      <Link to={"/fetchFunc"} style={{color:"white",textDecoration:"none",marginRight:"15px"}}> fetch function</Link>
      <Link to={"/axiosClass"} style={{color:"white",textDecoration:"none",marginRight:"15px"}}> axios class</Link>
      <Link to={"/fetchClass"} style={{color:"white",textDecoration:"none",marginRight:"15px"}}> fetch class</Link>
      
      
      <Routes>
        <Route path={"/"} Component={() => <h1>Hello To App</h1>} />
        <Route path={"/countFunction"} element={<Countstate />} />
        <Route path={"/countClass"} element={<CountClass />} />
        <Route path={"/MapFun"} element={<MapFun />} />
        <Route path={"/MapProps"} element={products.map((p)=>(<MapProps key={p.id} pro={p}/>))} />
        <Route path={"/axiosFunc"} element={<AxiosFun />} />
        <Route path={"/fetchFunc"} element={<FetchFun />} />
        <Route path={"/axiosClass"} element={<AxiosClass />} />
        <Route path={"/fetchClass"} element={<FetchClass />} />
        <Route path={"/details/:idU"} element={<DetailsAxios />} />
      </Routes>
    </div>
  );
}

export default App;
