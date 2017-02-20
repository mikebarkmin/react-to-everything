import * as USER_ACTION_TYPE from '../constants/userActionTypes';

const userReducer = function userReducer(state = {}, action) {
  switch (action.type) {
    case USER_ACTION_TYPE.FETCHED_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      };
    }
    case USER_ACTION_TYPE.FETCHED_PENDING: {
      return {
        ...state,
        fetching: true,
      };
    }
    case USER_ACTION_TYPE.FETCHED_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    }
    case USER_ACTION_TYPE.SET_NAME: {
      return { ...state, name: action.payload };
    }
    default: {
      return { ...state, err: `ACTION TYPE ${action.type} does not exsists` };
    }
  }
};

export default userReducer;
