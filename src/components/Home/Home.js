import React from "react";
import logo from "../../euro_logo.svg";
import "../Home/Home.css";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <p className="homeFont">
          <code>
            Join us and find out who is going to win the Euro 2020 tournament
          </code>
        </p>
      </header>
    </div>
  );
};

export default Home;
