import React from "react";
import Team from './Team'
import teamData from '../../teams_data.json'
import './Teams.css'

let teamsToShow = (
  <div className='teams-container'>
    {teamData.map((team,index)=>{
      return <Team
      name={team.name}
      id={team.id}
      photo={team.photo}
    />
    })}
  </div>
);

const Teams =() => {
  return <div>
    {teamsToShow}
  </div>
}

export default Teams;
