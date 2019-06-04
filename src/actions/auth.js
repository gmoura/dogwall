import { USER_AUTH_SUCESS, USER_AUTH_FAIL } from './types';
import Api from '../api';

export default email => dispatch => {
  Api.token(email)
    .then(resposse => resposse.json())
    .then(response =>
      dispatch({
        type: USER_AUTH_SUCESS,
        payload: response
      })
    )
    .catch(error => {
      console.error(error);
      dispatch({
        type: USER_AUTH_FAIL,
        payload: error
      });
    });
};
