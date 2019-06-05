import { combineReducers } from 'redux';
import auth from './reducer_auth';
import feed from './reducer_feed';

const rootReducer = combineReducers({
  auth,
  feed
});

export default rootReducer;
