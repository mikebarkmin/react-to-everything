import * as SETTINGS_ACTION_TYPES from '../constants/settingsActionTypes';

const initState = {
  settings1: false,
  settings2: false,
};

const settingsReducer = function settingsReducer(state = initState, action) {
  switch (action.type) {
    case SETTINGS_ACTION_TYPES.SET_SETTINGS1: {
      return {
        ...state,
        settings1: action.payload,
      };
    }
    case SETTINGS_ACTION_TYPES.SET_SETTINGS2: {
      return {
        ...state,
        settings2: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default settingsReducer;
