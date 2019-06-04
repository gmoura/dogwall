import { combineReducers } from 'redux';
import auth from './reducer_auth';

const rootReducer = combineReducers({
  auth
});

export default rootReducer;
