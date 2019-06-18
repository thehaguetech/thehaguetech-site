import dynamic from 'next/dynamic';
import React, { Component } from 'react';
import * as R from 'ramda';

const ReactSwipe = dynamic(() => import('react-swipe'));
const Slide = dynamic(() => import('./slide.js'));
const NavItem = dynamic(() => import('./nav-item.js'));

class CarouselMobile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentSlide: 0
    }
  }

  componentDidMount() {
    if(typeof window == 'undefined') {
      return;
    }
    if(window.innerWidth < 940) {
      this.toSlide(0)
    }
  }

  toSlide(index) {
    this.setState({
      activeSlide: index
    })
  }

  slideCallback(index, elem) {
    this.setState({
      activeSlide: index
    })
  }

  render() {
    let mapIndexed = R.addIndex(R.map);
    let reactSwipeEl;

    return <div className="Carousel mobile">
      <ReactSwipe
        className="ReactSwipe"
        swipeOptions={{
          continuous: true,
          startSlide: this.state.activeSlide,
          auto: 1000,
          speed: 1000,
          transitionEnd: this.slideCallback.bind(this)
        }}
        ref={el => (reactSwipeEl = el)}
      >
        {mapIndexed((data, idx) =>
          <div key={'slide-' + idx}>
            <Slide
              key={data.title}
              data={data}
              />
          </div>
          , this.props.slides)}
      </ReactSwipe>
      <div className="Carousel-nav">
        {mapIndexed((d, idx) =>
          <NavItem
            key={'navitem' + idx}
            index={idx}
            isActive={this.state.activeSlide == idx}
            toSlide={this.toSlide.bind(this)}
            />
        , this.props.slides)}
      </div>
      <style jsx>{`
        .Carousel {
          margin: 2rem 0 4rem 0;
          color: #0F2247;
          font-family: "Maison Neue", sans-serif;
          font-size: 1.2rem;
          font-weight: 500;
          line-height: 2rem;
          text-align: center;
          padding: 0 24px;
        }
         @media(min-width: 480px) {
           .Carousel {
             margin: 89px auto;
           }
         }
        .Carousel-nav {
          position: relative;
          display: flex;

          justify-content: center;
        }
      `}</style>
    </div>
  }
}

export default CarouselMobile;
