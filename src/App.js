import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Teams } from "./components/Teams/Teams";
import { Layout } from "./components/Layout";
import { NavBar } from "./components/Navbar";
import { NoMatch } from "./components/NoMatch";
import { Jumbotron } from "./components/Jumbotron";
import { Footer } from "./components/Footer/Footer";

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
