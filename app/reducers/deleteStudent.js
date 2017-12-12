import axios from 'axios';

const DELETE_STUDENT = 'DELETE_STUDENT';

export function delStudent(student) {
    return { type: DELETE_STUDENT, student }
}

export function removeStudent(id) {
    return function (dispatch) {
        axios.delete(`/api/students/deletestudent/${id}`)
            .then(res => res.data)
            .then(student => dispatch(delStudent(student)))
            .catch(err => console.log(err))
    }
}

function deleteStudent(student) {
    switch (action.type) {
        case DELETE_STUDENT:
            return
    }
}

export default deleteStudent;