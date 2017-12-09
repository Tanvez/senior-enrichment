import { combineReducers } from 'redux';
import students from './studentsReducer';
import campus from './campus';
import student from './oneStudent';
import campusStudents from './oneCampus';
import campi from './campi';

const reducers = combineReducers({
  students,
  campus,
  student,
  campusStudents,
  campi

});

export default reducers

