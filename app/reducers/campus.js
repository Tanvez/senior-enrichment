import axios from 'axios';

//Action Types
const GET_CAMPUSES = ' GET_CAMPUSES';

//ACTION CREATORS

export function getCampuses(Campuses) {
    return { type: GET_CAMPUSES, Campuses }
}
//thunk creators
export function fetchCampuses() {
    return function (dispatch) {
        axios.get('/api/campus/')
            .then(res => res.data)
            .then(Campuses => dispatch(getCampuses(Campuses)));
    }
}

function campuses(state = [], action) {
    switch (action.type) {
        case GET_CAMPUSES:
            return action.Campuses; // just returns all Campuses
        default: return state;
    }

}

export default campuses;