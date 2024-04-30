import React from "react";

function Antibiotics(props) {
  return (
    <div className="antibiotic-card">
      <p className="name">Name: {props.name}</p>
      <p className="class">Class: {props.class}</p>
      <p className="moa">MOA: {props.moa}</p>
      <p className={`bacterialcidal ${props.isBacterialCidal ? "" : "no"}`}>
        BacterialCidal: {props.isBacterialCidal ? "Yes" : "No"}
      </p>
    </div>
  );
}

export default Antibiotics;
