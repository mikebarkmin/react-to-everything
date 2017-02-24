import * as actions from '../../actions/navigationActions';
import * as types from '../../constants/navigationActionTypes';

describe('navigationActions', () => {
  it('should create an action to open the drawer', () => {
    const expectedAction = {
      type: types.DRAWER_OPEN,
    };
    expect(actions.openDrawer()).toEqual(expectedAction);
  });
  it('should create an action to close the drawer', () => {
    const expectedAction = {
      type: types.DRAWER_CLOSE,
    };
    expect(actions.closeDrawer()).toEqual(expectedAction);
  });
  it('should create an action to toggle the drawer', () => {
    const expectedAction = {
      type: types.DRAWER_TOGGLE,
    };
    expect(actions.toggleDrawer()).toEqual(expectedAction);
  });
  it('should create an action to pus a new route', () => {
    const payload = {
      path: 'home',
    };
    const expectedAction = {
      type: types.PUSH_ROUTE,
      payload,
    };
    expect(actions.pushRoute(payload)).toEqual(expectedAction);
  });
  it('should create an action to pop the last route', () => {
    const expectedAction = {
      type: types.POP_ROUTE,
    };
    expect(actions.popRoute()).toEqual(expectedAction);
  });
});
