import React, { useState } from "react";
import "./Team.css";

export const Team = (props) => {
  const [stage, setStage] = useState("");

  const handlePredictStage = (team) => {
    fetch(`http://localhost:5000/predict_stage?team=${team}`)
      .then((res) => res.json())
      .then((res) => setStage(res.stage));
  };

  return (
    <div className="team">
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
        rel="stylesheet"
      ></link>
      <img href="#" className="img-fluid" src={props.photo} alt={props.name} />
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <p style={{ fontWeight: "bold" }}>Group {props.group}</p>
        <p>
          Head coach: {props.coach}
          <br />
          Placed {props.ranking} in FIFA world ranking
        </p>
        <br />
        <button
          onClick={() => handlePredictStage(props.name)}
          className="predict-btn"
        >
          Predict
        </button>
        <br />
        <br />
        <h2 className="stage">{stage}</h2>
      </div>
    </div>
  );
};
