import axios from 'axios';

//Action Types
const GET_STUDENT = 'GET_STUDENT';

//ACTION CREATORS

export function getStudent(student) {
    return { type: GET_STUDENT, student }
}
//THUNK
export function fetchStudent(id) {
    return function (dispatch) {
        axios.get(`/api/students/${id}`)
            .then(res => res.data)
            .then(student => dispatch(getStudent(student)))
            .catch(err => console.log(err))
    }
}

function oneStudent(state = [], action) {
    switch (action.type) {
        case GET_STUDENT:
            return action.student; // just returns all students
        default: return state;
    }

}

export default oneStudent;
