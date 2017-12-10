import axios from 'axios';

//ACTION TYPES
const POST_STUDENT= 'POST_STUDENT';

//ACTION CREATOR
export function writeStudent(studentInfo){
  return {type: POST_STUDENT, studentInfo}
}

//THUNK

export function postStudent (student){
  return function (dispatch){
    return axios.post('/api/campus/addstudent')
    .then(res=>res.data)
    .then(student=>{
      dispatch(writeStudent(student))
    })
  }
}

//REDUCER

export default function addStudent (state = {}, action){
  switch(action.type){
    case POST_STUDENT:
    return action.studentInfo;
    default:
    return state;
  }
}
