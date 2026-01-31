import React from "react";

function MapProps(props) {                                    //?we have passed the list of products by props from App
  return (
    <div key={props.pro.id} style={{ display: "flex" }}> 
      <p style={{ marginRight: "15px" }}>{props.pro.name}</p>
      <p style={{ marginRight: "15px" }}>{props.pro.desc}</p>
      <p style={{ marginRight: "15px" }}>{props.pro.price}</p>
    </div>
  );
}

export default MapProps;
