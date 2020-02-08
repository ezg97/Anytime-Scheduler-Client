import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Row, Col } from 'react-grid-system';

import './ViewSchedule.css';

import {InfoContext } from '../InfoContext';

const { employees } = require('../Employees');
const { schedule } = require('../ScheduleAlgo');



class ViewSchedule extends React.Component{ 

    static contextType = InfoContext;
    
    render(){


        let selectedDay = this.props.selectedDay;

        let businesses = this.context.businessData;
        
        
        
        console.log(businesses.length>0? businesses[0].business_name : null);
        
       

        return(
            
        <div className='grid-container'>
            {(selectedDay != 'None')
            ?<Container className="grid" fluid style={{ lineHeight: '32px'}}>
                <Row className='column'>
                    <Col>Employee:</Col>
                    <Col>{selectedDay}:</Col>
                   
                </Row>
                <br />
                {schedule.map(employee => 
                    (employee)
                        ?<Row className='row'>
                                <Col>{employee.name}</Col>
                                <Col>{selectedDay==="Sun"?
                                        employee.sunday:selectedDay==="Mon"?
                                        employee.monday:selectedDay==="Tues"?
                                        employee.tuesday:selectedDay==="Wed"?
                                        employee.wednesday:selectedDay==="Thurs"?
                                        employee.thursday:selectedDay==="Fri"?
                                        employee.friday:selectedDay==="Sat"?
                                        employee.saturday:null
                                    }</Col>
                                {/*employee.hours[0]*/}
                        </Row>
                        :null)
                }
                    
                
            </Container>
            :<div className='alt-message'>
                <h2>No day selected.</h2>
            </div>}
        </div>
        );
    }
}


export default ViewSchedule;