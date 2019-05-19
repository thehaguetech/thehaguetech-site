import React, { Component } from 'react';

class Title extends Component {
  render() {
    const lengthOfTitle = this.props.children.length;
    return <div
        className={
          'Title' + (lengthOfTitle > 40 ? ' small' : '')
        }
        style={{
          color: this.props.color,
          textAlign: this.props.align
        }}
        >
      {this.props.children}
      <style jsx>{`
        .Title {
          color: #0F2247;
          font-family: "Noe Display", serif;
          font-weight: bold;
          font-size: 3rem;
          line-height: 3rem;
          text-shadow: 0 2px 17px 0 rgba(0,0,0,0.5);
          margin: 0.2em 0;
        }
        .small {
          font-size: 2rem;
          line-height: 2.5rem;
        }
      `}</style>
    </div>
  }
}

export default Title;
