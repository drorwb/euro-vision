import React from "react";
import "../Prediction/Prediction.css";
import { Chart } from "react-google-charts";
import teamsData from "../../teams_data.json";

class Prediction extends React.Component {
  state = {
    team1: "",
    team2: "",
    home_rate: 0.0,
    draw_rate: 0.0,
    away_rate: 0.0,
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    this.setState({
      team1: teamsData.find(({ name }) => name === query.get("team1")),
      team2: teamsData.find(({ name }) => name === query.get("team2")),
    });

    const url = `http://localhost:5000/predict_match?team1=${query.get(
      "team1"
    )}&team2=${query.get("team2")}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        let tempHome = res.home_rate;
        let tempAway = res.away_rate;
        let winner = res.winner[0];
        if (
          (tempHome < tempAway && winner === this.state.team1.name) ||
          (tempHome > tempAway && winner === this.state.team2.name)
        ) {
          this.setState({
            home_rate: tempAway,
            away_rate: tempHome,
            draw_rate: res.draw_rate,
          });
        } else {
          this.setState({
            home_rate: tempHome,
            away_rate: tempAway,
            draw_rate: res.draw_rate,
          });
        }
      });
  }

  render() {
    const { team1, team2, home_rate, draw_rate, away_rate } = this.state;
    const options = {
      legend: { position: "labeled" },
      is3D: true,
      pieStartAngle: 100,
      pieSliceTextStyle: {
        fontSize: 20,
      },
      slices: [
        { color: "#2BB673" },
        { color: "#8c8c8c" },
        { color: "#007fad" },
      ],
    };

    return (
      <div className="prediction_container">
        <div className="title_container">
          <img
            className="national_team_image"
            src={team1.photo}
            alt={team1.name}
          />
          <h1 className="prediction_title">
            {" "}
            {team1.name} vs. {team2.name}{" "}
          </h1>
          <img
            className="national_team_image"
            src={team2.photo}
            alt={team2.name}
          />
        </div>
        <Chart
          chartType="PieChart"
          width="100%"
          height="500px"
          options={options}
          data={[
            ["National Team", "Winning prediction"],
            [team1.name, home_rate * 100],
            ["Draw", draw_rate * 100],
            [team2.name, away_rate * 100],
          ]}
        />
      </div>
    );
  }
}

export default Prediction;
