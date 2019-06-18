import React, { Component } from 'react';

class Title extends Component {
  render() {
    // Get length of title
    const lengthOfTitle = this.props.children.length;

    // Set text size
    let size;
    if(this.props.size) {
      size = this.props.size;
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
          font-family: "Noe Display",serif;
          font-weight: bold;
          font-size: 28px;
          line-height: 32px;
          margin: 0 0;
          padding: 0 0;
          overflow: ellipsis;
          overflow-x: hidden;
          overflow-y: hidden;
          word-break: break-word;
        }
        .small {
          font-size: 28px;
          line-height: 32px;
        }
        .xsmall {
          font-size: 13px;
          line-height: 2.5rem;
        }
        @media(min-width: 480px) {
          .Title {
            font-size: 64px;
            line-height: 64px;
            font-weight: 700;
          }
          .small {
            font-size: 48px;
            line-height: 54px;
          }
          .xsmall {
            font-size: 17px;
            line-height: 20px;
          }
        }
      `}</style>
    </div>
  }
}

export default Title;
