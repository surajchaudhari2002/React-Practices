import React from "react";

const CardInfo = (props) => {
 const {age,name,country}=props.data
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
    </div>
  );
};

export default CardInfo;