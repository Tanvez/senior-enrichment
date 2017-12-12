import axios from 'axios';
//ACTION TYPES
const POST_CAMPUS = 'POST_CAMPUS';

//ACTION CREATOR
export function writeCampus(campus) {
  return { type: POST_CAMPUS, campus }
}
//REDUCER
export default function addCampus(state = [], action) {
  switch (action.type) {
    case POST_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
