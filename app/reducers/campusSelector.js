

// action type

const CAMPUS_SELECT = 'CAMPUS_SELECT';
//action creator
export function campusSelector(campusChoice){
  return {type: CAMPUS_SELECT, campusChoice}
}

//thunk

export function getCampusId(campusId){
  return function (dispatch){
    dispatch(campusSelector(campusId))
  }
}

export default function SelectCampus(state=0,action){
  switch(action.type){
    case CAMPUS_SELECT:
    return action.campusChoice;
    default:
    return state;
  }
}
