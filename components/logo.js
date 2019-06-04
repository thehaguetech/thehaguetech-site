import { Component } from 'react';

class Logo extends Component {
  render() {
    return <img
          src={this.props.color == 'white'
            ? '/static/components/footer/tht-logo-wit.png'
            : '/static/components/navigation/tht-logo.svg'}
          className="logo"
          width={this.props.width}
          height={this.props.height}
          style={this.props.style}
          />
  }
}

export default Logo;
