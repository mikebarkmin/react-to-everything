import { connect } from 'react-redux';
import Base from './NavigationBase';
import { pushRoute } from '../../actions/navigationActions';

export class Navigation extends Base {
  constructor(props) {
    super(props);
    this.goToHome = this.goToHome.bind(this);
    this.goToSettings = this.goToSettings.bind(this);
  }
  goToHome() {
    this.props.dispatch(pushRoute({ path: 'home' }));
  }
  goToSettings() {
    this.props.dispatch(pushRoute({ path: 'settings' }));
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
  };
}

export default connect(mapStateToProps)(Navigation);
