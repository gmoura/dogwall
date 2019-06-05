import { USER_AUTH_SUCESS, USER_AUTH_FAIL } from './types';
import Api from '../api';

export default email => dispatch => {
  Api.token(email)
    .then(resposse => resposse.json())
    .then(response => {
      if (response.error) {
        return dispatch({
          type: USER_AUTH_FAIL,
          payload: response
        });
      }
      return dispatch({
        type: USER_AUTH_SUCESS,
        payload: response
      });
    })
    .catch(error =>
      dispatch({
        type: USER_AUTH_FAIL,
        payload: error
      })
    );
};
