import history from '../helpers/history';
import { LOAD_IMAGE, CLOSE_IMAGE } from './types';

export const loadImagePreview = src => (dispatch, getState) => {
  const {
    feed: { category }
  } = getState();
  const id = src.match(/n(.*?)\./)[1];

  history.push(`${history.location.pathname}?category=${category}&id=${id}`);
  dispatch({
    type: LOAD_IMAGE,
    payload: src
  });
};

export const closeImagePreview = () => dispatch => {
  history.push(`${history.location.pathname}`);
  dispatch({
    type: CLOSE_IMAGE
  });
};
