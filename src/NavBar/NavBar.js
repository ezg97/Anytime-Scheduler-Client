import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';


import './NavBar.css';


class NavBar extends React.Component{ 
    
    render(){

        let bool = this.props.bool;

        return(
            
        <nav className="app_nav">
            {(bool === 'false')

            /* IF NOT SIGNED IN */
            ?<ul>
              <li> <NavLink to="/">Anytime Scheduler</NavLink> </li>
              <li> <NavLink to="/demo">Demo</NavLink> </li>
            </ul>

            /* IF SIGNED IN */
            :<ul>
                <li> <NavLink to="/home">Anytime Scheduler</NavLink> </li>
                <li className='logos'>
                    <span className='home'> <NavLink to="/home">&#8962;</NavLink> </span>
                    <span className='log-out'> <NavLink to="/">&#10162;</NavLink> </span>
                </li>
            </ul>
            }
        </nav>
        );
    }
}


export default NavBar;