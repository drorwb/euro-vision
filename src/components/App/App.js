import React from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar' 
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Switch>
      <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
