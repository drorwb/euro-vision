import React from 'react'
import logo from '../../euro_logo.svg';
import '../Home/Home.css';

const Home = () => {
    return(
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Join us and find out who is going to win the 2020 Euro</code>
          </p>
        </header>
      </div>
    )
}

export default Home;