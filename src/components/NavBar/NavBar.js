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
            </nav>
        </div>
    )
}

export default navBar;