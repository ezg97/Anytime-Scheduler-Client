import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './LaborPage.css';

const { business } = require('../Business');
const { operationHours } = require('../OperationHours');
const { dayLabor } = require('../DayLabor');
const { employees } = require('../Employees');


class LaborPage extends React.Component{ 

    render(){
     
        return(
        <div>
                      
            {/* Header */}
            <header className='header'>
                <h1>{business[0].name}</h1>
                <h2>Labor Quantity</h2>
            </header>
            
            {/* List of choices */}
            <select id='select-labor'>
                <option value="None">None</option>
                {operationHours.map(businessDay => 
                    /* This is for demonstration purposes only. In production I would make
                        the "None" option the selected choice */
                    (businessDay.day === "Sunday")
                    ?<option value={businessDay.day} selected>{businessDay.day}</option>
                    :<option value={businessDay.day}>{businessDay.day}</option>
                )}
            </select>

           
            <form className="labor-form">

                <section className="section-form">
                    <label htmlFor="hours">Hour:</label>
                    <select id='hours'>
                        {dayLabor.map(businessHour => 
                            /* This is for demonstration purposes only. In production I would make
                                the "None" option the selected choice */
                            (businessHour.time === "5AM")
                            ?<option value={businessHour.time} selected>{businessHour.time}</option>
                            :<option value={businessHour.time}>{businessHour.time}</option>
                        )}
                    </select>
                </section>

                <section className="section-form">
                    <label htmlFor="quantity">Labor Quantity:</label>
                    <input type="number" className='quantity-box' name="quantity" id="quantity" min="1" max={employees.length}/>
                </section>


                <button type='submit' className='submit-labor'>Submit</button>

            </form>
                
                

          
        </div>
        );
    }
}


export default LaborPage;