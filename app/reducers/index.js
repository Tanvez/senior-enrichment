/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import students from './studentsReducer';

// const initialState = {}

// const rootReducer = function (state = initialState, action) {
//   switch (action.type) {
//     default: return state
//   }
// };

const reducers = combineReducers({
  students
});



export default reducers

