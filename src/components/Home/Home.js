import React, { useState } from "react";
import euroLogo from "../../assets/euro_logo.svg";
import "./Home.css";
import teamData from "../../teams_data.json";

export const Home = () => {
  const [winner, setWinner] = useState("");

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

  return (
    <div>
      <div className="options-select">
        <div className="predict-option">
          <div className="title">1 vs 1</div>
          <div className="features">
            <form action="/">
              <ul>
                <li>
                  <p>Choose first team: </p>
                </li>
                <li>
                  <select name="team1" id="team1" required>
                    <option>-------------</option>
                    {teamData.map((team, key) => {
                      return <option>{team.name}</option>;
                    })}
                  </select>
                </li>
                <li>
                  <p>Choose second team:</p>
                </li>
                <li>
                  <select name="team2" id="team2" required>
                    <option>-------------</option>
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
              <a onClick={handleOneVsOne} className="btn">
                Let's go!
              </a>
            </form>
            <br />
            <h2 className="winner">{winner}</h2>
          </div>
        </div>
        <div className="predict-option">
          <div className="title">Euro 2020 scenario</div>
          <img src={euroLogo} alt="cur" className="center" />
          <a href="#" className="btn">
            Let's go!
          </a>
        </div>
        <div className="predict-option">
          <div className="title">Specific team scenario</div>
          <div className="features">
            <ul>
              <li>
                <p>Choose the team you want to predict:</p>
              </li>
              <li>
                <select id="national-teams">
                  <option>-------------</option>
                  {teamData.map((team, key) => {
                    return <option>{team.name}</option>;
                  })}
                </select>
              </li>
            </ul>
          </div>
          <a href="#" className="btn">
            Let's go!
          </a>
        </div>
        {/* <img src={euroLogo} alt="cur" className="center" /> */}
      </div>
    </div>
  );
};
