import React, { useState } from "react";
import euroLogo from "../../assets/euro_logo.svg";
import "./Home.css";
import teamData from "../../teams_data.json";

export const Home = () => {
  const [winner, setWinner] = useState("");
  const [eurowinner, setEuroWinner] = useState("");
  const [stage, setStage] = useState("");

  const handleOneVsOne = () => {
    var e = document.getElementById("team1");
    var team1 = e.options[e.selectedIndex].value;
    e = document.getElementById("team2");
    var team2 = e.options[e.selectedIndex].value;
    if (team1 === team2) setWinner("Please select two different teams");
    else {
      fetch(`http://localhost:5000/predict_match?team1=${team1}&team2=${team2}`)
        .then((res) => res.json())
        .then((res) => setWinner(res.winner));
    }

  };

  const handlePredictStage = () => {
    var e = document.getElementById("team");
    var team = e.options[e.selectedIndex].value;
    fetch(`http://localhost:5000/predict_stage?team=${team}`)
      .then((res) => res.json())
      .then((res) => setStage(res.stage));
  };

  const handleEuroWinner = () => {
    fetch("http://localhost:5000/predict_winner")
      .then((res) => res.json())
      .then((res) => setEuroWinner(res.eurowinner));
  };

  return (
    <div>
      <div className="options-select">
        <div className="predict-option">
          <div className="title">1 vs 1</div>
          <div className="features">
            <form action="/">
              <ul>
                <li>First Team</li>
                <li>
                  <select name="team1" id="team1" required>
                    <option>Choose a team...</option>
                    {teamData.map((team, key) => {
                      return <option>{team.name}</option>;
                    })}
                  </select>
                </li>
                <li>Second Team</li>
                <li>
                  <select name="team2" id="team2" required>
                    <option>Choose a team...</option>
                    {teamData.map((team, key) => {
                      return (
                        <option key={key} name={team.name}>
                          {team.name}
                        </option>
                      );
                    })}
                  </select>
                </li>
              </ul>
              <br />
              <a onClick={handleOneVsOne} className="btn">
                Let's go!
              </a>
            </form>
            <br />
            <h2 className="winner">{winner}</h2>
          </div>
        </div>
        <div className="predict-option">
          <div className="eurotitle">Euro 2020 scenario</div>
          <form action="/">
            <img src={euroLogo} alt="cur" className="center" />
            <a onClick={handleEuroWinner} className="btn">
              Let's go!
            </a>
          </form>
          <br />
          <h2 className="eurowinner">{eurowinner}</h2>
        </div>
        <div className="predict-option">
          <div className="title">Specific team scenario</div>
          <div className="features">
            <form action="/">
              <ul>
                <li>
                  <p>Check out your favourite team!</p>
                </li>
                <li>
                  <select name="team" id="team">
                    <option>Choose a team...</option>
                    {teamData.map((team, key) => {
                      return <option>{team.name}</option>;
                    })}
                  </select>
                </li>
              </ul>
              <br />
              <br />
              <br />
              <a onClick={handlePredictStage} className="btn" id="btn3">
                Let's go!
              </a>
            </form>
          </div>
          <br />
          <br />
          <br />
          <br />
          <h2 className="stage">{stage}</h2>
        </div>
        {/* <img src={euroLogo} alt="cur" className="center" /> */}
      </div>
    </div>
  );
};
