import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Demo.css';

import ViewSchedule from '../ViewSchedule/ViewSchedule';

class Demo extends React.Component{ 
    
    constructor(props){
        super(props);
        this.state = {
          day: 'None'
        };
    }
    
    //update the state to the current day selected
    handleSelectedDay = (val) => {
        this.setState({day: val});
     }
 
 
    render(){

        
        return(
            

        <div className="page-container display schedule">
             {/* 1. HEADER*/}
            <header className='header'>
                <h1>Weekly Schedule.</h1>
            </header>

            
             {/* 2. THIS WILL LET YOU SELECT THE DAY OF THE SCHEDULE YOU WANT TO SEE*/}
            <select value={this.state.day} id='mySelect' onChange={(e) => this.handleSelectedDay(e.target.value)}>
                    <option value="None">None</option>
                    <option value="Sun" >Sunday</option>
                    <option value="Mon">Monday</option>
                    <option value="Tues">Tuesday</option>
                    <option value="Wed">Wednesday</option>
                    <option value="Thurs">Thursday</option>
                    <option value="Fri">Friday</option>
                    <option value="Sat">Saturday</option>
            </select>

            {/* 3. THIS COMPONENT WILL DISPLAY THE SCHEDULE*/}
            <Switch>
                <Route exact path='/Demo'
                  render={(routeProps) =>
                    <ViewSchedule
                        selectedDay={this.state.day}
                    />
                } />

            </Switch>
            
        </div>
        );
    }
}


export default Demo;