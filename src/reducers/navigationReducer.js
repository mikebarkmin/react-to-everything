import * as NAVIGATION_ACTION_TYPES from '../constants/navigationActionTypes';

const initState = {
  openDrawer: false,
};

const navigationReducer = function navigationReducer(state = initState, action) {
  switch (action.type) {
    case NAVIGATION_ACTION_TYPES.DRAWER_OPEN: {
      return {
        ...state,
        openDrawer: true,
      };
    }
    case NAVIGATION_ACTION_TYPES.DRAWER_CLOSE: {
      return {
        ...state,
        openDrawer: false,
      };
    }
    case NAVIGATION_ACTION_TYPES.DRAWER_TOGGLE: {
      return {
        ...state,
        openDrawer: !state.openDrawer,
      };
    }
    default: {
      return { ...state, err: `ACTION TYPE ${action.type} does not exsists` };
    }
  }
};

export default navigationReducer;
