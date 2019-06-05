import { LOAD_IMAGE, CLOSE_IMAGE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOAD_IMAGE:
      return {
        src: action.payload
      };
    case CLOSE_IMAGE:
      return {
        src: ''
      };
    default:
      return state;
  }
};
