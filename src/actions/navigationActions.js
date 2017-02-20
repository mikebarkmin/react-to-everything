import * as NAVIGATION_ACTION_TYPES from '../constants/navigationActionTypes';

export function openDrawer() {
  return {
    type: NAVIGATION_ACTION_TYPES.DRAWER_OPEN,
    payload: true,
  };
}

export function closeDrawer() {
  return {
    type: NAVIGATION_ACTION_TYPES.DRAWER_CLOSE,
    payload: true,
  };
}

export function toggleDrawer() {
  return {
    type: NAVIGATION_ACTION_TYPES.DRAWER_TOGGLE,
    payload: true,
  };
}
