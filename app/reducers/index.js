/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import studentsReducer from './studentsReducer';

const initialState = {}

const rootReducer = function (state = initialState, action) {
  switch (action.type) {
    default: return state
  }
};

const reducers = combineReducers({
  root: rootReducer,
  student: studentsReducer
});



export default reducers

