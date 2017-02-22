import * as NAVIGATION_ACTION_TYPES from '../constants/navigationActionTypes';

const initState = {
  openDrawer: false,
  routes: [{ path: 'home' }],
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
    case NAVIGATION_ACTION_TYPES.PUSH_ROUTE: {
      return {
        ...state,
        routes: [...state.routes, action.payload],
        openDrawer: false,
      };
    }
    case NAVIGATION_ACTION_TYPES.POP_ROUTE: {
      let routes = [...state.routes].shift();
      if (!routes.length > 1) {
        routes = state.routes;
      }
      return {
        ...state,
        routes,
      };
    }
    default: {
      return state;
    }
  }
};

export default navigationReducer;
