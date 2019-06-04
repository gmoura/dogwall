import { USER_AUTH_SUCESS, USER_AUTH_FAIL } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case USER_AUTH_SUCESS:
      return action.payload;
    case USER_AUTH_FAIL:
      return action.payload;
    default:
      return state;
  }
};
