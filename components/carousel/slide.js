import React, { Component } from 'react';
import Link from 'next/link';
import * as R from 'ramda';

class Slide extends Component {
  render() {
    return <div className="Slide">
      <Link prefetch href={this.props.data.href}>
        <div>
          <div className="image-wrapper">
            <img height={this.props.data.imageHeight} src={this.props.data.image} style={{
              position: 'relative',
              top: (this.props.data.title == 'co-creation' ? '5px' : 0)
            }}/>
          </div>
          <div className="Slide-title">
            {this.props.data.title}
          </div>
        </div>
      </Link>
      <style jsx>{`
        .Slide {
          cursor: pointer;
        }
        .Slide .image-wrapper {
          height: 118px;
          vertical-align: baseline;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .Slide img {
          display: block;
          margin: 0 auto;
          vertical-align: middle;
        }
        .Slide-title {
          margin: 2rem auto;
          transition: transform 0.3s;
          text-align: center;
          color: #0F2247;
          font-family: "Maison Neue", sans-serif;
          font-size: 17px;
          font-weight: 500;
          line-height: 22.4px;
          text-align: center;
          padding: 0 24px;
        }
        @media(min-width: 940px) {
          .Slide {
            flex: 1;
          }
          .Slide-title {
            font-size: 24px;
            line-height: 32px;
          }
          .Slide img {
            transition: transform 0.3s;
          }
          .Slide:hover img {
            transform: scale(1.05);
            transition: transform 0.2s;
          }
        }
      `}</style>
    </div>
  }
}

export default Slide;
