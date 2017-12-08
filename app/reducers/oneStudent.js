import axios from 'axios';

//Action Types
const GET_STUDENT = 'GET_STUDENT';

//ACTION CREATORS

export function getStudent(student) {
    return { type: GET_STUDENT, student }
}
//thunk creators
export function fetchStudent(id) {
    return function (dispatch) {
        axios.get('/api/student/',id)
            .then(res => res.data)
            .then(student => dispatch(getStudent(student)))
    }
}

function oneStudent(state =[], action) {
    switch (action.type) {
        case GET_STUDENT:
            return action.student; // just returns all students
        default: return state;
    }

}

export default oneStudent;
