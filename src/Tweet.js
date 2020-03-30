import React from "react";
import "./App.css";
const Tweet = props => {
  return (
    <div className="tweet">
      <strong>{props.name}</strong>
      <p>{props.message} </p>
      <h4>number of likes:</h4>
    </div>
  );
};

export default Tweet;
