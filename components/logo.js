import { Component } from 'react';

class Logo extends Component {
  render() {
    return <div>
      <img
        src={this.props.color == 'white'
          ? '/static/components/footer/tht-logo-wit.png'
          : '/static/components/navigation/tht-logo.svg'}
        className="logo"
        width={this.props.width}
        height={this.props.height}
        style={this.props.style}
        />
      <style jsx>{`
        .logo {
          width: 70px;
          height: 70px;
          max-width: unset;
        }
      `}</style>
    </div>
  }
}

export default Logo;
