import React, { Component } from 'react';
import * as R from 'ramda';

class Carousel extends Component {
  render() {
    return <div className="Carousel">
      {R.map((data) => {
        return <Slide key={data.title} data={data} />
      }, this.props.slides)}
      <style jsx>{`
        .Carousel {
          margin: 3rem 0;
          color: #0F2247;
          font-family: "Maison Neue", sans-serif;
          font-size: 1.2rem;
          font-weight: 500;
          line-height: 2rem;
          text-align: center;
          padding: 0 24px;
        }
      `}</style>
    </div>
  }
}

class Slide extends Component {
  render() {
    return <div className="Slide">
      <div>
        <img src={this.props.data.image} />
      </div>
      <div>
        {this.props.data.title}
      </div>
    </div>
  }
}

export default Carousel;
