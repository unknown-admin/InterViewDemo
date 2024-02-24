import {LOGIN_REQUEST, SET_LOADING, EVENT_REQUEST} from '../types/index';

// Action creator for login request
export const loginRequest = params => {
  return {
    type: LOGIN_REQUEST,
    params,
  };
};

export const eventsRequest = params => {
    return {
      type: EVENT_REQUEST,
      params,
    };
  };

export const setLoading = params => {
  return {
    type: SET_LOADING,
    payload: params,
  };
};
