import React, { Component } from 'react';

class SmallCapsTitle extends Component {
  render() {
    const lengthOfSmallCapsTitle = this.props.children.length;
    return (
      <div className="SmallCapsTitle" style={{color: this.props.color}}>
        {this.props.children}
        <style jsx>{`
          .SmallCapsTitle {
            font-family: "Maison Neue", sans-serif;
            text-transform: uppercase;
            font-size: 15px;
          }
          @media(min-width: 480px) {
            .SmallCapsTitle {
              font-size: 15px;
              line-height: 24px;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default SmallCapsTitle;
