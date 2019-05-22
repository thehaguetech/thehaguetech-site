import dynamic from 'next/dynamic';
import React, { Component } from 'react';

// Load components
const Title = dynamic(() => import('./title.js'));
const Button = dynamic(() => import('./button.js'));

class YellowBanner extends Component {
  render() {
    return <div className="YellowBanner">
      <div className="max-width">
        <Title size="large">
          {this.props.title}
        </Title>
        <Button style={{
          marginTop: '36px',
          background: '#071124',
          borderColor: '#071124',
          color: '#fff',
        }}>
          {this.props.buttonText}
        </Button>
      </div>
      <style jsx>{`
        .YellowBanner {
          text-align: left;
          background-color: #fff000;
          min-height: 624px;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        .max-width {
          margin: 0 auto;
          width: 36rem;
          max-width: 100%;
          padding: 0 1rem;
        }
      `}</style>
    </div>
  }
}

export default YellowBanner;
