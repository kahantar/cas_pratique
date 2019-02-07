import { combineReducers } from 'redux';
import { ReducerAllAlert, ReducerAllCustomer } from './allReducers';

const rootReducer = combineReducers({
    allAlert: ReducerAllAlert,
    allClient: ReducerAllCustomer
})

export default rootReducer 
