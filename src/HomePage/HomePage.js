import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import { Container, Row, Col } from 'react-grid-system';

import './HomePage.css';



const { business } = require('../Business');

class HomePage extends React.Component{ 

    render(){
     
        return(
        <div>
                      
            {/* Header */}
            <header className='header'>
                <h1>{business[0].name}</h1>
            </header>

            {/* Scheduling */}
            <div className='menu-container'>
                <section className='scheduling'>
                    <h2> <NavLink to="/demo">Generate/View Schedule</NavLink> </h2>
                </section>

                {/* Operations */}
                <section className='operations'>
                    <h2> <NavLink to="/operations">Operations</NavLink> </h2>
                    <p>add, edit, delete employees, hours, etc.</p>
                </section>
            </div>
            
        </div>
        );
    }
}


export default HomePage;