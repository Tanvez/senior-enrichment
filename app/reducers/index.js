import { combineReducers } from 'redux';
import students from './studentsReducer';
import campus from './campus';

const reducers = combineReducers({
  students,
  campus
});

export default reducers

