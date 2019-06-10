import React, { Component } from 'react';
import Link from 'next/link';

class Button extends Component {
  renderLink(props) {
    return (
      <div>
        <Link href={props.buttonLink || props.href}>
          <a target={props.target || '_self'} className="Button" style={props.style}>
            {props.children}
          </a>
        </Link>
        <style jsx>{`
          .Button {
            display: inline-block;
            min-width: 164px;
            max-width: 100%;
            line-height: 56px;
            background-color: #feef00;
            border: solid #feef00 1px;
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
          .Button:hover {
            background: #fff000 !important;
            border: solid #071124 1px !important;
            color: #071124 !important;
          }
        `}</style>
      </div>
    )
  }
  renderButton(props) {
    return (
      <div>
        <button type={props.type} className="Button" style={props.style}>
          {props.children}
        </button>
        <style jsx>{`
          .Button {
            display: inline-block;
            min-width: 164px;
            max-width: 100%;
            line-height: 56px;
            background-color: #feef00;
            border: solid #feef00 1px;
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
          .Button:hover {
            background: #fff000 !important;
            border: solid #071124 1px !important;
            color: #071124 !important;
          }
        `}</style>
      </div>
    )
  }
  render() {
    return <div hidden={this.props.hidden}>
      {this.props.type
        ? this.renderButton(this.props)
        : this.renderLink(this.props)
      }
    </div>
  }
}

export default Button;
