// 1.属性代理
import React, {Component} from 'React';

class MyComponent extends Component {
  render() {
    return <WrappedComponent {...this.props} />
  }
}

export default MyContainer(MyComponent);

// 2.反向继承
const MyContainer = (WrappedComponent) =>
class extends WrappedComponent {
  render() {
    return super.render();
  }
}