import React, { Component } from 'react';
import Link from 'next/link';

class Button extends Component {
  render() {
    return <div>
      <Link href={this.props.buttonLink || 'https://www.bartroorda.nl'}>
        <a className="Button" style={this.props.style}>
          {this.props.children}
        </a>
      </Link>
      <style jsx>{`
        .Button {
          display: inline-block;
          min-width: 164px;
          max-width: 100%;
          line-height: 56px;
          background-color: #feef00;
          box-shadow: 0 2px 6px 0 rgba(0,0,0,0.25);
          cursor: pointer;

          color: #071124;
          font-family: "Maison Neue", sans-serif;
          font-size: 16px;
          font-weight: 300;
          text-align: center;
          text-decoration: none;
          text-transform: lowercase;
        }
      `}</style>
    </div>
  }
}

export default Button;
