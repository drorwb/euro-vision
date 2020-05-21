import React from 'react';
import '../NavBar/NavBar.css'
import { Link } from 'react-router-dom';

const navBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand"><Link to={'/'} className='nav-link'><h1>Euro 2020 Predictor</h1></Link></a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link to={'/'} className="nav-link"> Home </Link></li>
                    <li className="nav-item"><Link to={'/about'} className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to={'/teams'} className="nav-link">Teams</Link></li>
                    </ul>
                </div>            
            </nav>
        </div>
    )
}

export default navBar;