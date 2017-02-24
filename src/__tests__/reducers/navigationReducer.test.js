import reducer from '../../reducers/navigationReducer';
import * as types from '../../constants/navigationActionTypes';

const initState = {
  openDrawer: false,
  routes: [{ path: 'home' }],
};

describe('navigationReducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {}),
    ).toEqual(initState);
  });

  it('should handle DRAWER_OPEN', () => {
    expect(
      reducer({}, {
        type: types.DRAWER_OPEN,
      }),
    ).toEqual({
      openDrawer: true,
    });

    expect(
      reducer(initState, {
        type: types.DRAWER_OPEN,
      }),
    ).toEqual({
      ...initState,
      openDrawer: true,
    });
  });
});
