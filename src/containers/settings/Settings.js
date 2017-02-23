import { connect } from 'react-redux';
import Base from './SettingsBase';

import { setSettings1, setSettings2 } from '../../actions/settingsActions';

@connect(store => ({
  settings: store.settings,
}))
export default class Settings extends Base {
  constructor(props) {
    super(props);
    this.onSettings1Change.bind(this);
    this.onSettings2Change.bind(this);
  }
  onSettings1Change(value) {
    this.props.dispatch(setSettings1(value));
  }
  onSettings2Change(value) {
    this.props.dispatch(setSettings2(value));
  }
}
