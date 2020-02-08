import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './HoursPage.css';

import {InfoContext } from '../InfoContext';


const { SelectDayWidget } = require('../SelectDayWidget/SelectDayWidget');
const { hours } = require('../Hours');
const { operationHours } = require('../OperationHours');



class HoursPage extends React.Component{ 

    /* 
        ---------------------------------
        |            CONTEXT            |
        ---------------------------------
    */
   static contextType = InfoContext;

    /* 
        ---------------------------------
        |            STATE              |
        ---------------------------------
    */
   constructor(props){
        super(props);
        this.state = {
            index: 0,
            day: '',
            open: '0',
            close: '0'
        };
    }


    


    /* 
        ---------------------------------
        |            METHODS            |
        ---------------------------------
    */
    handleSelectedDay = (val) => {

        if(val != "None"){
            this.setState({day: val});
        }
        else{
            this.setState({day: ''});
        }
        console.log('pri');
        console.log('context',this.context)
        this.context.dayData.forEach(day => {
            if(day.day == val){
                console.log("TODAY IS", val);
            }
        })
    }

    updateOpen = (val) => {
        if(val != "0"){
            this.setState({day: val});
        }
        else{
            this.setState({day: '0'});
        }
    }



    render(){

        let employees = this.context.employeeData;
        let business = this.context.businessData;
        let dayLabor = this.context.laborData;

        return(
        <div>
                      
            {/* Header */}
            <header className='header'>
                <h1>{business.length>0? business[0].business_name:null}</h1>
                <h2>Operation Hours</h2>
            </header>

           {/* 
            <Switch>
                <Route exact path='/hours'
                  render={(routeProps) =>
                    <SelectDayWidget
                        selectedDay={'Sun'}
                    />
                } />

            </Switch>
 
            Both iterations not working for some reason? For this reaason I'm not 
            putting the select option in a component even tho it is going to be reused.
            <SelectDayWidget />
            
            <Switch>
                <Route path='/hours' component={SelectDayWidget} />
            </Switch>

            {/* List of choices */}
            <select id='select-day' onChange={(e) => this.handleSelectedDay(e.target.value)}>
                <option value="None" selected>None</option>
                {operationHours.map(businessDay => 
                    <option value={businessDay.day}>{businessDay.day}</option>
                )}
            </select>
            
           {/* FORM */}
            <form className="labor-form"> 
                
                <section className="section-form">
                    <label htmlFor="hours">Open:</label>
                    <select id='hours' onChange={(e) => this.updateOpen(e.target.value)}> 
                        <option value='0'>Closed</option>

                        {hours.map(hour => 
                            /* This is for demonstration purposes only. In production I would make
                                the "None" option the selected choice */
                                (hour.time === "5AM")
                                ?<option value={hour.time} selected>{hour.time}</option>
                                :<option value={hour.time}>{hour.time}</option>
                        )}
                    </select>
                </section>

                    
                <section className="section-form">

                    <label htmlFor="hours">Close:</label>
                    <select id='hours'>
                        <option value='0'>Closed</option>

                        {hours.map(hour => 
                            /* This is for demonstration purposes only. In production I would make
                                the "None" option the selected choice */
                            (hour.time === "5AM")
                            ?<option value={hour.time} selected>{hour.time}</option>
                            :<option value={hour.time}>{hour.time}</option>
                        )}
                    </select>

                </section>


                <button type='submit' className='submit-labor'>Submit</button>

            </form>
                
                

          
        </div>
        );
    }
}


export default HoursPage;