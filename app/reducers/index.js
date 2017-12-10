import { combineReducers } from 'redux';
import students from './studentsReducer';
import campus from './campus';
import student from './oneStudent';
import campusStudents from './oneCampus';
import campi from './campi';
import newStudents from './addStudent';

const reducers = combineReducers({
  students,
  campus,
  student,
  campusStudents,
  campi,
  newStudents

});

export default reducers;

