import React, { Component, Fragment } from "react";

const CreditCard = (props) => {
  const style = {
    width: "400px",
    height: "250px",

    backgroundColor: props.bgColor,
    color: props.color,
    borderRadius: "10px",
  };

  const cardStyle = {
    width: "100px",
  };

  const cardNr =
    new Array(props.number.length - 3).join("•") + props.number.slice(-4);

  const type = () => {
    if (props.type == "Visa")
      return <img src="./img/visa.png" style={cardStyle} />;
    if (props.type == "Master Card")
      return <img src="./img/master-card.svg" style={cardStyle} />;
  };

  return (
    <div style={style}>
      {type()} <br/>
      {cardNr} <br/>
      Expires: {props.expirationMonth}/{props.expirationYear} {props.bank} <br />
      {props.owner}
    </div>
  );
};

export default CreditCard;
