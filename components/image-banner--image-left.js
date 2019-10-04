import dynamic from 'next/dynamic';
import React, { Component } from 'react';

// Load components
const Title = dynamic(() => import('../components/title.js'));
const Button = dynamic(() => import('../components/button.js'));
const SmallCapsTitle = dynamic(() => import('../components/small-caps-title.js'));

class ImageBannerImageLeft extends Component {
  render() {
    return <div className="ImageBannerImageLeft" style={{
      backgroundImage: `url(${this.props.image})`
    }}>
      <div>
        <div className="black-overlay"></div>
      </div>
      <div className="placeholder">
        &nbsp;
      </div>
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
      <style jsx>{`
        .ImageBannerImageLeft {
          background: #000 center center / cover no-repeat;
          position: relative;
          color: #fff;
          padding: 3rem 1rem;
          display: flex;
          justify-content: space-around;
          margin-bottom: 3rem;
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
          .ImageBannerImageLeft {
            margin-bottom: 0;
            min-height: 821px;

            background-size: cover;
            background-position: unset;
          }
        }
        .placeholder {
          flex: 6;
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

export default ImageBannerImageLeft;
