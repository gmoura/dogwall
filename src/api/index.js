const { REACT_APP_API } = process.env;

const Api = {
  token: email =>
    fetch(`${REACT_APP_API}/signup`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email
      })
    }),

  feed: (token, q = '') =>
    fetch(`${REACT_APP_API}/feed?${q}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
      }
    })
};

export default Api;
