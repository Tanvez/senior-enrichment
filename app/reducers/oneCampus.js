//add something here
import axios from 'axios'

//ACTION TYPE
const GET_CAMP_STU = 'GET_CAMP_STU';
//ACTION CREATOR
export function getCampStu(campStu) {
    return { type: GET_CAMP_STU, campStu }
}
//THUNK
export function fetchCampStu(campId) {
    return function (dispatch) {
        axios.get(`/api/campus/students/${campId}`)
            .then(res => res.data)
            .then(campus => dispatch(getCampStu(campus))) // dispatch action
            .catch(err => console.log(err))
    }
}
//REDUCER
function campusStudents(state = [], action) {
    switch (action.type) {
        case GET_CAMP_STU:
            return action.campStu;
        default: return state;
    }
}

export default campusStudents
