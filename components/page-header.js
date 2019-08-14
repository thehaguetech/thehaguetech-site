import dynamic from 'next/dynamic';
import React, { Component } from 'react';

// Load components
const Title = dynamic(() => import('./title.js'));
const SmallCapsTitle = dynamic(() => import('./small-caps-title.js'));
const Button = dynamic(() => import('./button.js'));

class PageHeader extends Component {
  render() {
    return <div className="PageHeader" style={Object.assign(
        {},{backgroundImage: `url("${this.props.image}")`}, this.props.style
      )}>
      <div>
        <div className="black-overlay" />
      </div>
      <div className="max-width" style={{marginTop: '4rem'}}>
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
          min-height: 36rem;
          display: flex;
          padding-top: 10rem;
          justify-content: center;
          flex-direction: column;
          color: #fff;
          background: #1126a9 center center / cover no-repeat;
          position: relative;
          overflow: hidden;
        }
        .black-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.2);
        }
        .max-width {
          margin: 0 auto;
          width: 36rem;
          max-width: 100%;
          padding: 0 3rem;
          position: relative;
        }
        .button {
          background: #f00;
        }
      `}</style>
    </div>
  }
}

export default PageHeader;
