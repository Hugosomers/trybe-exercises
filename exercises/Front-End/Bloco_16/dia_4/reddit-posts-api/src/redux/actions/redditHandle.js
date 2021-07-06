export const REQUESTING_API = 'REQUESTING_API';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export const requestingApi = () => {
  return {
    type: REQUESTING_API,
  }
}

export const requestSuccess = (payload) => {
  return {
    type: REQUEST_SUCCESS,
    payload,
  }
}

export const requestFailed = (payload) => {
  return {
    type: REQUEST_FAILED,
    payload,
  }
}

export const fetchApi = (searchInput) => {
  return (dispatch) => {
    dispatch(requestingApi());
    return fetch(`https://www.reddit.com/r/${searchInput}.json`)
      .then((response) => response.json())
      .then((json) => dispatch(requestSuccess(json)))
      .catch((error) => dispatch(requestFailed(error.message)))
  }
}
