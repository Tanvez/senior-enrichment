import axios from 'axios';

//Action Types
const GET_STUDENTS = 'GET_STUDENTS';

//ACTION CREATORS

export function getStudents(students) {
    return { type: GET_STUDENTS, students }
}
//thunk creators
export function fetchStudents() {
    return function (dispatch) {
        axios.get('/api/students/')
            .then(res => res.data)
            .then(students => dispatch(getStudents(students)))
    }
}

function studentReducer(state = [], action) {
    switch (action.type) {
        case GET_STUDENTS:
            return action.students; // just returns all students
        default: return state;
    }

}

export default studentReducer;
