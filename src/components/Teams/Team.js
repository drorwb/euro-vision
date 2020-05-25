import React, { Component } from 'react';
import './Team.css'

class Team extends Component{
    render(){
        return(
            <div className='team'>
                <img href='#' className='img-fluid' src={this.props.photo} alt={this.props.name} />
                <div className='card-body'>
                    <h4 className='card-title'><a>{this.props.name}</a></h4>
                    <p style={{fontWeight: 'bold'}}>Group {this.props.group}</p>
                    <p>Head coach: {this.props.coach}</p>
                    <p>Placed {this.props.ranking} in FIFA world ranking</p>
                    <a href='#' className='predict-btn'>Predict</a>
                </div>
            </div>
        )
    }
};

export default Team;