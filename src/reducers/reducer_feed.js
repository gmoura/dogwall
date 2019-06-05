import { FEED_SUCESS, FEED_FAIL } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FEED_SUCESS:
      return action.payload;
    case FEED_FAIL:
      return action.payload;
    default:
      return state;
  }
};
