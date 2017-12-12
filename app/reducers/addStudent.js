import axios from 'axios';
import addStudent from './studentsReducer';
//ACTION TYPES
const POST_STUDENT = 'POST_STUDENT';

//ACTION CREATOR
export function writeStudent(student) {
  return { type: POST_STUDENT, student }
}

//REDUCER

export default function addStudents(state = [], action) {
  switch (action.type) {
    case POST_STUDENT:
      return action.student;
    default:
      return state;
  }
}