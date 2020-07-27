import React from "react";
import "./Popup.css";

export const Popup = (props) => {
  return (
    <div className="popup">
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
        rel="stylesheet"
      ></link>
      <div className="inner">
        <h1 className="stage">{props.text}</h1>
        <button onClick={props.closePopup} className="closebutton">
          Close
        </button>
      </div>
    </div>
  );
};
