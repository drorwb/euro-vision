import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../Home/Home";
import { About } from "../About/About";
import Prediction from "../Prediction/Prediction"
import  Teams from "../Teams/Teams";
import { Layout } from "../Layout";
import  NavBar  from "../NavBar/NavBar";
import { NoMatch } from "../NoMatch";
import { Jumbotron } from "../Jumbotron";
import { Footer } from "../Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Jumbotron />
      <Layout>
        <br />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/teams" component={Teams} />
            <Route path="/prediction" component={Prediction} />
            <Route component={NoMatch} />
          </Switch>
          <br />
          <br />
          <Footer />
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
