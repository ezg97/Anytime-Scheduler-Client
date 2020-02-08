import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';


import './OperationsPage.css';



const { business } = require('../Business');

class OperationsPage extends React.Component{ 

    render(){
     
        return(
        <div className='operation-page'>
                      
            {/* Header */}
            <header className='header'>
                <h1>{business[0].name}</h1>
                <h2>Operations</h2>
            </header>
            
            {/* List of choices */}
            <div className='operations-links'>
                <ul>
                    <li> <NavLink to="/employees">Employees</NavLink> </li>
                    <li> <NavLink to="/management">Management</NavLink> </li>
                    {/*<li> <NavLink to="/account">Account Settings</NavLink> </li>*/}
                </ul>
                

            </div>
          
        </div>
        );
    }
}


export default OperationsPage;