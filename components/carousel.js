import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import * as R from 'ramda';

class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentSlide: 0
    }
  }

  componentDidMount() {
    this.windowWidth = window.innerWidth;
    if(this.windowWidth < 940) {
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

    if(this.windowWidth < 940) {
      return <div className="Carousel">
        <ReactSwipe
          className="ReactSwipe"
          swipeOptions={{
            continuous: true,
            startSlide: this.state.activeSlide,
            //callback: this.slideCallback.bind(this),
            transitionEnd: this.slideCallback.bind(this)
          }}
          ref={el => (reactSwipeEl = el)}
        >
          {mapIndexed((data, idx) =>
            <div key={idx}>
              <Slide
                key={data.title}
                data={data} />
            </div>
            , this.props.slides)}
        </ReactSwipe>
        <div className="Carousel-nav">
          {mapIndexed((d, idx) =>
            <NavItem
              key={idx}
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
          .Carousel-nav {
            position: relative;
            display: flex;
            justify-content: center;
          }
          @media(min-width: 940px) {
            .Carousel-nav {
              display: none;
            }
          }
        `}</style>
      </div>
    }

    else {
      return <div className="Carousel">
        {mapIndexed((data, idx) =>
          <Slide
            key={idx}
            data={data} />
          , this.props.slides)
        }
        <div className="Carousel-nav">
          {mapIndexed((d, idx) =>
            <NavItem
              key={idx}
              index={idx}
              isActive={this.state.activeSlide == idx}
              toSlide={this.toSlide.bind(this)}
              />
            , this.props.slides)
          }
        </div>
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
          @media(min-width: 480px) {
            .Carousel {
              margin: 89px auto;
            }
          }
          @media(min-width: 940px) {
            .Carousel {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            }
          }
          .Carousel-nav {
            position: relative;
            display: flex;
            justify-content: center;
          }
          @media(min-width: 940px) {
            .Carousel-nav {
              display: none;
            }
          }
        `}</style>
        </div>
    }

  }
}

class Slide extends Component {
  render() {
    return <div className="Slide">
      <div>
        <img src={this.props.data.image} />
      </div>
      <div className="Slide-title">
        {this.props.data.title}
      </div>
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

class NavItem extends Component {
  render() {
    return (
      <div>
        <a
          onClick={() => this.props.toSlide(this.props.index)}
          className={'Carousel-nav-bullet' + (this.props.isActive ? ' active' : '')}
          />
        <style jsx>{`
          .Carousel-nav-bullet {
            width: 10px;
            height: 10px;
            border-radius: 10px;
            background-color: #fff;
            border: solid 1px #1126a9;
            display: block;
            margin: 0 4px;
          }
          .Carousel-nav-bullet.active {
            background-color: #1126a9;
          }
       `}</style>
      </div>
    )
  }
}

export default Carousel;
