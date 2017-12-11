import axios from 'axios';

//ACTION TYPES
const POST_STUDENT= 'POST_STUDENT';

//ACTION CREATOR
export function writeStudent(student){
  return {type: POST_STUDENT, student}
}

//THUNK

export function postStudent (student){
  return function (dispatch){
    return axios.post('/api/students/addstudent', student)
    .then(res=>res.data)
    .then(student=>  dispatch(writeStudent(student)))
  }
}

//REDUCER

export default function addStudent (state = [], action){
  switch(action.type){
    case POST_STUDENT:
    return action.student;
    default:
    return state;
  }
}
