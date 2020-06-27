import React, { Component } from "react";
import "./Team.css";

class Team extends Component {
  state = {
    stage: "",
  };

  handlePredictStage = (team) => {
    fetch(`http://localhost:5000/predict_stage?team=${team}`)
      .then((res) => res.json())
      .then((res) => this.setState({ stage: res.stage }));
  };

  render() {
    return (
      <div className="team">
        <img
          href="#"
          className="img-fluid"
          src={this.props.photo}
          alt={this.props.name}
        />
        <div className="card-body">
          <h4 className="card-title">
            <a>{this.props.name}</a>
          </h4>
          <p style={{ fontWeight: "bold" }}>Group {this.props.group}</p>
          <p>Head coach: {this.props.coach}</p>
          <p>Placed {this.props.ranking} in FIFA world ranking</p>
          <button
            onClick={() => this.handlePredictStage(this.props.name)}
            className="predict-btn"
          >
            Predict
          </button>
          <br />
          <h2 className="stage">{this.state.stage}</h2>
        </div>
      </div>
    );
  }
}

export default Team;
