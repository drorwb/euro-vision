import React, { Component } from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Teams from "../Teams/Teams";

class App extends Component {
  state = {
    teams: [
      { id: 24, name: "Albania" },
      { id: 10, name: "Austria" },
      { id: 5, name: "Belgium" },
      { id: 11, name: "Croatia" },
      { id: 13, name: "Czech Republic" },
      { id: 3, name: "England" },
      { id: 6, name: "France" },
      { id: 2, name: "Germany" },
      { id: 18, name: "Hungary" },
      { id: 21, name: "Iceland" },
      { id: 7, name: "Italy" },
      { id: 23, name: "Northern Ireland" },
      { id: 15, name: "Poland" },
      { id: 4, name: "Portugal" },
      { id: 20, name: "Republic of Ireland" },
      { id: 16, name: "Romania" },
      { id: 8, name: "Russia" },
      { id: 17, name: "Slovakia" },
      { id: 1, name: "Spain" },
      { id: 14, name: "Sweden" },
      { id: 9, name: "Switzerland" },
      { id: 19, name: "Turkey" },
      { id: 12, name: "Ukraine" },
      { id: 22, name: "Wales" },
    ],
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/teams" component={Teams} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
