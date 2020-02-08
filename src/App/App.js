import React, {Component} from 'react';
import {Route, Switch , NavLink} from 'react-router-dom';

import './App.css'

import InfoContext from '../InfoContext';

import LandingPage from '../LandingPage/LandingPage';
import Demo from '../Demo/Demo';
import NavBar from '../NavBar/NavBar'
import HomePage from '../HomePage/HomePage';
import OperationsPage from '../OperationsPage/OperationsPage';
import EmployeesPage from '../EmployeesPage/EmployeesPage';
import ManagementPage from '../ManagementPage/ManagementPage';
import LaborPage from '../LaborPage/LaborPage';
import HoursPage from '../HoursPage/HoursPage';




class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      business: [],
      hours: [],
      employees: [],
      dayLabor: [],
      schedule: [],
    };
  }

  componentDidMount() {
    console.log('MOUNTED, ABOUT TO CALL')
    this.fetchDatabase();
}

  fetchDatabase = () => {
    console.log('MOUNTED, ABOUT TO CALL')
    Promise.all([
        fetch(`http://localhost:8000/all`,
        {
            headers: {
                'table':'business'
            }
        }),
        fetch(`http://localhost:8000/all`,
        {
            headers: {
                'table':'operation'
            }
        }),
        fetch(`http://localhost:8000/all`,
        {
            headers: {
                'table':'employee'
            }
        }),
        fetch(`http://localhost:8000/all`,
        {
            headers: {
                'table':'shr'
            }
        }),
    ])
        .then(([business, hours, employees, dayLabor]) => {
            console.log('responses received!!!');
            
            if (!business.ok)
                return business.json().then(e => Promise.reject(e));
            if (!hours.ok)
                return hours.json().then(e => Promise.reject(e));
            if (!employees.ok)
                return employees.json().then(e => Promise.reject(e));
            if (!dayLabor.ok)
                return dayLabor.json().then(e => Promise.reject(e));

            console.log('RETURNING...')
            return Promise.all([business.json(), hours.json(), employees.json(), dayLabor.json()]);
        })
        .then( ([business, hours, employees, dayLabor]) => {
            console.log(hours);
            console.log(dayLabor)

            this.setState({business, hours, employees, dayLabor});
        })
        .catch(error => {
            console.error({error});
        });
  }
  //methods
  updateEmployees = () => {
    fetch(`http://localhost:8000/all`,
        {
            headers: {
                'table':'employee'
            }
        })
        .then( (employees) => {
          console.log('responses received!!!');
          
          if (!employees.ok)
              return employees.json().then(e => Promise.reject(e));
          

          console.log('RETURNING...')
          return employees.json();
      })
      .then( (employees) => {
          this.setState({employees});
      })
      .catch(error => {
          console.error({error})
      });

    
  }

  //render
  render(){


    return (
      <InfoContext.Provider value={{businessData: this.state.business,
        employeeData: this.state.employees, dayData: this.hours, laborData: this.dayLabor, 
        scheduleData: this.schedule,
        /* METHODS */
        updateEmployees: this.updateEmployees}}>

        <div className="container">
        {console.log('STATE',this.state.hours)}
          {/* NAV BAR */}
          <Switch>

              {/* LANDING PAGE */}
              <Route exact path='/'
                render={(routeProps) =>
                  <NavBar
                    bool={'false'}
                  />
                }
              />

              {/* SIGNED IN */}
              <Route 
                exact path={['/demo','/home','/operations','/employees',
                '/management','/labor','/hours']}
                render={(routeProps) =>
                  <NavBar
                    bool={'true'}
                  />
                }
              />

          </Switch>

          <main role="main">

            {/* MAIN TEXT SECTION */}
            <Switch>
              <Route exact path='/' component={LandingPage} />

              <Route exact path='/demo' component={Demo} />

              <Route exact path='/home' component={HomePage} />

              <Route exact path='/operations' component={OperationsPage} />

              <Route exact path='/employees' component={EmployeesPage} />

              <Route exact path='/management' component={ManagementPage} />

              <Route exact path='/labor' component={LaborPage} />

              <Route exact path='/hours' component={HoursPage} />
              
            </Switch>

          </main>

        </div>
    </InfoContext.Provider>
    );
  }
}
  
  

export default App;
