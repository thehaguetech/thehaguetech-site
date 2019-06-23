import dynamic from 'next/dynamic';
import React, { Component } from 'react';
import inView from 'in-view';
import $ from 'jquery';

// Load components
const Title = dynamic(() => import('./title.js'));
const Button = dynamic(() => import('./button.js'));

class YellowBanner extends Component {
  componentDidMount() {
    this.initTransition();
  }

  initTransition() {
    const makeYellow = (el) => {
      $('body').addClass('yellow-banner');
    }
    const backToNormal = (el) => {
      $('body').removeClass('yellow-banner');
    }
    // https://www.npmjs.com/package/in-view
    inView.threshold(0.85)
    inView('.YellowBanner')
      .on('enter', makeYellow)
      .on('exit', backToNormal);
  }

  componentWillUnmount() {
    inView('.YellowBanner')
      .on('enter', () => {})
      .on('exit', () => {});
  }

  render() {
    return <div className="YellowBanner">
      <div className="max-width">
        <Title size="large" style={{
          fontSize: '36px',
          lineHeight: '36px'
        }}>
          {this.props.title}
        </Title>
        <Button href={this.props.buttonLink || '/contact'} target={this.props.target} style={{
          marginTop: '36px',
          background: '#071124',
          borderColor: '#071124',
          color: '#fff',
        }}>
          {this.props.buttonText}
        </Button>
      </div>
      <style global jsx>{`
        body {
          transition: background-color 1000ms 0ms;   
        }
        body.yellow-banner {
          transition: background-color 1000ms 200ms;   
          background-color: #fff000;
        }
        .TextAndImage {
          transition: opacity 500ms 200ms;
        }
        body.yellow-banner .TextAndImage {
          opacity: 0;
          transition: opacity 300ms 0;   
        }
        body.yellow-banner .YellowBanner::before {
          opacity: 1;
          margin-top: -4rem;
          z-index: -1;
        }
      `}</style>
      <style jsx>{`
        .YellowBanner {
          position: relative;
          text-align: left;
          background: #fff000 url('/static/components/yellow-banner/yellow-background-image.jpg') center top no-repeat;
          background-size: cover;
          min-height: 624px;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        .YellowBanner::before {
          opacity: 0;
          top: 0;
          transition: margin-top 500ms linear;
          content: "";
          position: absolute;
          display: block;
          height: 4rem;
          width: 100%;
          background-image: linear-gradient(0deg, #fff000, transparent);
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
