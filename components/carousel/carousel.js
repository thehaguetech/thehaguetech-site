import dynamic from 'next/dynamic';
import React, { Component } from 'react';
import * as R from 'ramda';

const CarouselDesktop = dynamic(() => import('./carousel-desktop.js'));
const CarouselMobile = dynamic(() => import('./carousel-mobile.js'));

class Carousel extends Component {
  render() {
    if(typeof window !== 'undefined') {
      return window && window.innerWidth < 940
        ? <CarouselMobile slides={this.props.slides} />
        : <CarouselDesktop slides={this.props.slides} />
    }
    // For server side rendering: Always load mobile
    else {
      return <CarouselMobile slides={this.props.slides} />
    }
  }
}

export default Carousel;
