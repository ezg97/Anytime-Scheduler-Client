import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';


import ViewSchedule from './ViewSchedule/ViewSchedule';

import {InfoContext } from './InfoContext';


class test extends React.Component{ 
 
    /* 
        ---------------------------------
        |            CONTEXT            |
        ---------------------------------
    */
   static contextType = InfoContext;

   
    render(){


        let employees = this.context.employeeData;
        let dayLabor = this.context.laborData; 

        

        

        
        return(
            

        <>
             
           {/*console.log('DATA THISSSSSSS.................\n\n\n',employees.length>0? employees:null)*/} 
        </>
        );
    }
}


export default test;