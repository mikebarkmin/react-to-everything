import reducer from '../../reducers/settingsReducer';
import * as types from '../../constants/settingsActionTypes';

const initState = {
  settings1: false,
  settings2: false,
};

describe('settingsReducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {}),
    ).toEqual(initState);
  });

  it('should hande SET_SETTINGS1', () => {
    expect(
      reducer({}, {
        type: types.SET_SETTINGS1,
        payload: true,
      }),
    ).toEqual({
      settings1: true,
    });

    expect(
      reducer({}, {
        type: types.SET_SETTINGS1,
        payload: false,
      }),
    ).toEqual({
      settings1: false,
    });
  });

  it('should hande SET_SETTINGS2', () => {
    expect(
      reducer({}, {
        type: types.SET_SETTINGS2,
        payload: true,
      }),
    ).toEqual({
      settings2: true,
    });

    expect(
      reducer({}, {
        type: types.SET_SETTINGS2,
        payload: false,
      }),
    ).toEqual({
      settings2: false,
    });
  });
});
