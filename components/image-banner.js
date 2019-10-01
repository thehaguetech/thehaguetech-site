import dynamic from 'next/dynamic';
import React, { Component } from 'react';

// Load components
const Title = dynamic(() => import('../components/title.js'));
const Button = dynamic(() => import('../components/button.js'));
const SmallCapsTitle = dynamic(() => import('../components/small-caps-title.js'));

class ImageBanner extends Component {
  render() {
    return <div className="ImageBanner" style={{
      backgroundImage: `url(${this.props.image})`
    }}>
      <div className="black-overlay">
        &nbsp;
      </div>
      <div className="ImageBanner-inner">
        <div className="text-wrapper">
          <Title color="#fff">
            {this.props.title}
          </Title>
          <div style={{ margin: '1rem 0' }}>
            <SmallCapsTitle>
              {this.props.SmallCapsTitle}
            </SmallCapsTitle>
          </div>
          <br /><br />
          <Button href={this.props.buttonLink}>
            {this.props.buttonText}
          </Button>
        </div>
        <div className="placeholder">
          &nbsp;
        </div>
      </div>
      <style jsx>{`
        .ImageBanner {
          background: #000 63% 0% / cover no-repeat;
          position: relative;
          color: #fff;
          padding: 3rem 1rem;
          margin-bottom: 3rem;
        }
        .ImageBanner-inner {
          display: flex;
          justify-content: space-around;
          margin: 0 auto;
          width: 1057px;
          max-width: 90%;
        }
        .black-overlay {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: rgba(81, 81, 81, 0.5);
        }
        @media (min-width: 900px) {
          .ImageBanner {
            margin-bottom: 0;
            min-height: 821px;

            background-size: cover;
            background-position: 70% top;
          }
        }
        .placeholder {
          flex: 2;
        }
        @media (min-width: 900px) {
          .placeholder {
            flex: 6;
          }
        }
        .text-wrapper {
          z-index: 1;
          position: relative;
          flex: 4;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
      `}</style>
    </div>
  }
}

export default ImageBanner;
