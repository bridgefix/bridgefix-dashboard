import { combineReducers } from 'redux';
import loginReducer from '../Reducer/loginReducer';
import dashboardReducer from '../Reducer/dashboardReducer';
import employeeReducer from '../Reducer/employeeReducer';

export default combineReducers({
    loginReducer,
    dashboardReducer,
    employeeReducer,
})