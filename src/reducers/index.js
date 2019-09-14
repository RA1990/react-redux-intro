import {combineReducers} from 'redux';
import clockReducer from './clock_reducers';

const rootReducer = combineReducers({
  clock: clockReducer
});


export default rootReducer;

