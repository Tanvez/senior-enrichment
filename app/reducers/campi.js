import axios from 'axios';

//Action Types
const GET_CAMPI = 'GET_CAMPI';

//ACTION CREATORS

export function getCampi(campi) {
    return { type: GET_CAMPI, campi }
}
//THUNK
export function fetchCampi(id) {
    return function (dispatch) {
        axios.get(`/api/students/campi/${id}`)
            .then(res => res.data)
            .then(campi => dispatch(getCampi(campi)))
            .catch(err => console.log(err))
    }
}

function oneCampi(state = [], action) {
    switch (action.type) {
        case GET_CAMPI:
            return action.campi; // just returns all campis
        default: return state;
    }

}

export default oneCampi;
