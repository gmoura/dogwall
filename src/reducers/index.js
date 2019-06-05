import { combineReducers } from 'redux';
import auth from './reducer_auth';
import feed from './reducer_feed';
import imagePreview from './reducer_image_preview';

const rootReducer = combineReducers({
  auth,
  feed,
  imagePreview
});

export default rootReducer;
