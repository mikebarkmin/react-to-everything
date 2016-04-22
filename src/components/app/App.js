import Render from './AppRender';

export default class App extends Render {
  render() {
    return Render.call(this, this.props, this.state);
  }
}
