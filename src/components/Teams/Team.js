import React, { useState } from "react";
import "./Team.css";
import { Popup } from "../Popup/Popup";

export const Team = (props) => {
  const [stage, setStage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    fetch(`http://localhost:5000/predict_stage?team=${props.name}`)
      .then((res) => res.json())
      .then((res) => setStage(res.stage));
    setShowPopup(!showPopup);
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
        <button onClick={togglePopup.bind(this)} className="predict-btn">
          Predict
        </button>
        {showPopup ? (
          <Popup text={'The prediction for ' + props.name + ' is:'} stage={stage} closePopup={togglePopup.bind(this)} />
        ) : null}
        <br />
        <br />
      </div>
    </div>
  );
};
