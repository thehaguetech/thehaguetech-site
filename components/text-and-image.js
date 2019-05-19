import dynamic from 'next/dynamic';
import React, { Component } from 'react';

// Load components
const Title = dynamic(() => import('./title.js'));
const Button = dynamic(() => import('./button.js'));
const SmallCapsTitle = dynamic(() => import('./small-caps-title.js'));

class TextAndImage extends Component {
  render() {
    return <div className="TextAndImage">
      <SmallCapsTitle>
        {this.props.category}
      </SmallCapsTitle>
      <Title>
        {this.props.title}
      </Title>
      <div className="text">
        {this.props.text}
      </div>
      <Button>
        learn more
      </Button>
      <style jsx>{`
        .TextAndImage {
          color: #0F2247;
          font-family: "Maison Neue", sans-serif;
          font-size: 1.2rem;
          font-weight: 500;
          line-height: 2rem;
          text-align: left;
          padding: 2rem 24px;
        }
        .text {
          margin: 3rem 0;
        }
      `}</style>
    </div>
  }
}

export default TextAndImage;
