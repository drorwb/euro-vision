import React from "react";
import euroLogo from "../../assets/euro_logo.svg";
import "./Home.css";
import teamData from '../../teams_data.json';

export const Home = () => (
  <div>
    <div className="options-select">
      <div className="predict-option">
        <div className='title'>1 vs 1</div>
        <div className='features'>
          <ul>
            <li><p>choose first team: </p></li>
            <li><select id="national-teams">
              <option>-------------</option>
              {teamData.map((team, key)=>{
                return(
                  <option>
                    {team.name}
                  </option>
                )
              })}
            </select></li>
            <li><p>choose second team:</p></li>
            <li><select id="national-teams">
              <option>-------------</option>
              {teamData.map((team, key)=>{
                return(
                  <option
                    key={key}
                    name={team.name}
                  >
                    {team.name}
                  </option>
                )
              })}
            </select></li>
          </ul>
        </div>
        <a href='#' className='btn'>Let's go!</a>
      </div>
      <div className="predict-option">
        <div className='title'>Euro 2020 scenario</div>
        <img src={euroLogo} alt='cur' className='center'/>
        <a href='#' className='btn'>Let's go!</a>
      </div>
      <div className="predict-option">
        <div className='title'>Specific team scenario</div>
        <div className='features'>
          <ul>
            <li><p>Choose the team you want to predict:</p></li>
            <li><select id="national-teams">
              <option>-------------</option>
              {teamData.map((team, key)=>{
                return(
                  <option>
                    {team.name}
                  </option>
                )
              })}
            </select></li>
          </ul>
        </div>
        <a href='#' className='btn'>Let's go!</a>
      </div>
      {/* <img src={euroLogo} alt="cur" className="center" /> */}
    </div>
  </div>
);
