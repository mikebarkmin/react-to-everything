import * as actions from '../../actions/settingsActions';
import * as types from '../../constants/settingsActionTypes';

describe('settingsActions', () => {
  it('should create an action to set the value of setting1', () => {
    const payload = true;
    const expectedAction = {
      type: types.SET_SETTINGS1,
      payload,
    };
    expect(actions.setSettings1(payload)).toEqual(expectedAction);
  });
  it('should create an action to set the value of setting2', () => {
    const payload = true;
    const expectedAction = {
      type: types.SET_SETTINGS2,
      payload,
    };
    expect(actions.setSettings2(payload)).toEqual(expectedAction);
  });
});
