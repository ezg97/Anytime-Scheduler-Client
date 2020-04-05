import { createContext } from 'react';

export const InfoContext = createContext({
    businessData: null,
    employeeData: null, 
    dayData: null,//operation hours
    laborData: null,
    scheduleData: null,
    fetched: null,
    logout: () => {

    },
    clearState: () => {

    },
    checkFetch: () => {

    },
    updateEmployees: () => {

    },
    updateBusinessDay: () => {

    },
    updateBusinessLabor: () => {

    },

});

export default InfoContext;