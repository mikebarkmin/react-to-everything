import * as USER_ACTION_TYPE from '../constants/userActionTypes';

export function fetchUser() {
  return {
    type: USER_ACTION_TYPE.FETCHED_FULFILLED,
    payload: {
      name: 'Tom',
      age: '30',
    },
  };
}

export function setUserName(name) {
  return {
    type: USER_ACTION_TYPE.SET_NAME,
    payload: name,
  };
}
