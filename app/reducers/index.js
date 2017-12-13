import { combineReducers } from 'redux';
import students from './studentsReducer';
import campus from './campus';
import student from './oneStudent';
import campusStudents from './oneCampus';
import campi from './campi';
import newStudent from './addStudent';
// import selectCampus from './campusSelector';



const reducers = combineReducers({
  students,
  campus,
  student,
  campusStudents,
  campi,
  newStudent
  // selectCampus
});

export default reducers;
