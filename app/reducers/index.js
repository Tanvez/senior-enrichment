import { combineReducers } from 'redux';
import students from './studentsReducer';
import campus from './campus';
import student from './oneStudent'

const reducers = combineReducers({
  students,
  campus,
  student
});

export default reducers

