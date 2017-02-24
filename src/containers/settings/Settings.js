import { connect } from 'react-redux';
import Base from './SettingsBase';

import { setSettings1, setSettings2 } from '../../actions/settingsActions';

export class Settings extends Base {
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

function mapStateToProps(state) {
  return {
    settings: state.settings,
  };
}

export default connect(mapStateToProps)(Settings);
