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
      reducer(undefined, {
        type: types.DRAWER_OPEN,
      }),
    ).toEqual({
      ...initState,
      openDrawer: true,
    });
  });

  it('should handle DRAWER_CLOSE', () => {
    expect(
      reducer({}, {
        type: types.DRAWER_CLOSE,
      }),
    ).toEqual({
      openDrawer: false,
    });

    expect(
      reducer(undefined, {
        type: types.DRAWER_CLOSE,
      }),
    ).toEqual({
      ...initState,
      openDrawer: false,
    });
  });

  it('should handle DRAWER_TOGGLE', () => {
    expect(
      reducer({}, {
        type: types.DRAWER_TOGGLE,
      }),
    ).toEqual({
      openDrawer: true,
    });

    expect(
      reducer(undefined, {
        type: types.DRAWER_TOGGLE,
      }),
    ).toEqual({
      ...initState,
      openDrawer: true,
    });
  });

  it('should handle PUSH_ROUTE', () => {
    const payload = { path: 'settings' };
    expect(
      reducer({ routes: [] }, {
        type: types.PUSH_ROUTE,
        payload,
      }),
    ).toEqual({
      routes: [payload],
      openDrawer: false,
    });

    expect(
      reducer(undefined, {
        type: types.PUSH_ROUTE,
        payload,
      }),
    ).toEqual({
      ...initState,
      openDrawer: false,
      routes: [{ path: 'home' }, payload],
    });
  });

  it('should handle POP_ROUTE', () => {
    expect(
      reducer({ routes: [{ path: 'home' }] }, {
        type: types.POP_ROUTE,
      }),
    ).toEqual({
      routes: [{ path: 'home' }],
    });

    const routes = [
      { path: 'home' },
      { path: 'settings' },
      { path: 'test' },
    ];
    expect(
      reducer({ ...initState, routes }, {
        type: types.POP_ROUTE,
      }),
    ).toEqual({
      ...initState,
      openDrawer: false,
      routes: [{ path: 'home' }, { path: 'settings' }],
    });
  });
});
