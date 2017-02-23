import * as SETTINGS_ACTION_TYPES from '../constants/settingsActionTypes';

export function setSettings1(value) {
  return {
    type: SETTINGS_ACTION_TYPES.SET_SETTINGS1,
    payload: value,
  };
}

export function setSettings2(value) {
  return {
    type: SETTINGS_ACTION_TYPES.SET_SETTINGS2,
    payload: value,
  };
}
