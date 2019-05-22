import React, { Component } from 'react';

class Title extends Component {
  render() {
    // Get length of title
    const lengthOfTitle = this.props.children.length;

    // Set text size
    let size;
    if(this.props.size) {
      size == this.props.size;
    } else {
      size = (lengthOfTitle < 40 ? 'large' : 'small')
    }
    return <div
        className={
          // If size prop is large -> show large title
          // If size prop is small -> show small title
          // By default: show small title is text length < 40 characters
          'Title ' + size
        }
        style={Object.assign({
          color: this.props.color,
          textAlign: this.props.align
        }, this.props.style)}
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
          margin: 0 0;
        }
        .small {
          font-size: 2rem;
          line-height: 2.5rem;
        }
        .xsmall {
          font-size: 2rem;
          line-height: 2.5rem;
        }
      `}</style>
    </div>
  }
}

export default Title;
