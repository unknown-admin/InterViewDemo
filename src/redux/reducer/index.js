import {LOGIN_SUCCESS, LOGIN_FAILED, SET_LOADING, EVENT_SUCCESS, EVENT_FAILED} from '../types';
const initialState = {
  loading: false,
  user: null,
  error: null,
  eventData: [],
  eventError: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        eventError: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };
    case EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        eventData: action.payload,
        eventError: null,
      };
    case EVENT_FAILED:
      return {
        ...state,
        loading: false,
        eventData: null,
        eventError: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
