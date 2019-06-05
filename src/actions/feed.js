import { FEED_SUCESS, FEED_FAIL } from './types';
import Api from '../api';

export default (token, query) => dispatch => {
  Api.feed(token, query)
    .then(response => response.json())
    .then(response => {
      if (response.error) {
        return dispatch({
          type: FEED_FAIL,
          payload: response
        });
      }
      return dispatch({
        type: FEED_SUCESS,
        payload: response
      });
    })
    .catch(error =>
      dispatch({
        type: FEED_FAIL,
        payload: error
      })
    );
};
