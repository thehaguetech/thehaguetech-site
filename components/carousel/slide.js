import React, { Component } from 'react';
import Link from 'next/link';
import * as R from 'ramda';

class Slide extends Component {
  render() {
    return <div className="Slide">
      <Link prefetch href={this.props.data.href}>
        <div>
          <div>
            <img src={this.props.data.image} />
          </div>
          <div className="Slide-title">
            {this.props.data.title}
          </div>
        </div>
      </Link>
      <style jsx>{`
        .Slide img {
          display: block;
          height: 76px;
          margin: 0 auto;
        }
        .Slide-title {
          margin: 2rem auto;
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
        }
      `}</style>
    </div>
  }
}

export default Slide;
