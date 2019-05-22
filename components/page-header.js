import dynamic from 'next/dynamic';
import React, { Component } from 'react';

// Load components
const Title = dynamic(() => import('./title.js'));
const SmallCapsTitle = dynamic(() => import('./small-caps-title.js'));
const Button = dynamic(() => import('./button.js'));

class PageHeader extends Component {
  render() {
    return <div className="PageHeader">
      <div className="max-width">
        <SmallCapsTitle>
          {this.props.smallCapsTitle}
        </SmallCapsTitle>
        <Title color="#fff">
          {this.props.title}
        </Title>
      </div>
      <style jsx>{`
        .PageHeader {
          text-align: center;
          background-color: #666;
          min-height: 36rem;
          display: flex;
          padding-top: 10rem;
          justify-content: center;
          flex-direction: column;
          color: #fff;
        }
        .max-width {
          margin: 0 auto;
          width: 36rem;
          max-width: 100%;
          padding: 0 3rem;
        }
        .button {
          background: #f00;
        }
      `}</style>
    </div>
  }
}

export default PageHeader;
