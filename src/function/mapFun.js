import React from "react";

const products = [
  { id: 1, name: "product1", desc: "dwyuagsuddskdsjf", price: 2010 },
  { id: 2, name: "product2", desc: "udygfopèqwodasxf", price: 4030 },
  { id: 3, name: "product3", desc: "asdfedygfrsdgsu", price: 676869 },
  { id: 4, name: "product4", desc: "qwertyazerty", price: 676776 },
];

function MapFun() {
  return (
    <div>
        <h1>map() method</h1>
      {products.map((pt) => (
        <div key={pt.id} style={{ display: "flex" }}>
          <p style={{ marginRight: "15px" }}>{pt.name}</p>
          <p style={{ marginRight: "15px" }}>{pt.desc}</p>
          <p style={{ marginRight: "15px" }}>{pt.price}</p>
        </div>
      ))}
    </div>
  );
}

export default MapFun;
