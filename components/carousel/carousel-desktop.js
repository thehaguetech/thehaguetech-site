import React, { Component } from 'react';
import * as R from 'ramda';

import Slide from './slide.js';
import NavItem from './nav-item.js';

class CarouselDesktop extends Component {
  render() {
    let mapIndexed = R.addIndex(R.map);

    return <div className="Carousel desktop">
      {mapIndexed((data, idx) =>
        <Slide
          key={idx}
          data={data} />
        , this.props.slides)
      }
      <style jsx>{`
        .Carousel {
          margin: 3rem auto;
          color: #0F2247;
          font-family: "Maison Neue", sans-serif;
          font-size: 1.2rem;
          font-weight: 500;
          line-height: 2rem;
          text-align: center;
          padding: 0 24px;
          max-width: 1200px;
        }
        .Carousel {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .Carousel-nav {
          position: relative;
          display: flex;
          justify-content: center;
          display: none;
        }
      `}</style>
    </div>
  }
}

export default CarouselDesktop;
