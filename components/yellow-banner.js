import dynamic from 'next/dynamic';
import React, { Component } from 'react';
import $ from 'jquery';

// Load components
const Title = dynamic(() => import('./title.js'));
const Button = dynamic(() => import('./button.js'));

class YellowBanner extends Component {
  componentDidMount() {
    this.initTransition();
  }

  initTransition() {
    const self = this;

    // On scroll: Change background color
    $(window).scroll(function(event){
      const percentageSeen = self.percentageSeen();
      const backgroundColorOpacity = Math.min(100, Math.floor((100 - percentageSeen) / 100 * 255))
      const textAndImageOpacity = 100 - backgroundColorOpacity;
      $('body').css('background-color', `rgba(255, 240, 0, ${backgroundColorOpacity / 100})`)
      $('.TextAndImage, .StoryOverview').css('opacity', `${(textAndImageOpacity + 0) / 100}`)
    })
  }

  percentageSeen () {
    let $win = $(window),
        $element = $('.YellowBanner'),
        viewportHeight = $win.height(),
        scrollTop = $win.scrollTop(),
        elementOffsetTop = $element.offset().top,
        elementHeight = $element.height();

    // https://stackoverflow.com/a/37382645
    var percentageSeen = Math.min( 100, Math.round((elementOffsetTop - scrollTop) * 100 / viewportHeight) )

    // console.log(percentageSeen)
    return percentageSeen >= 0 ? Math.abs(percentageSeen * 1.8) : Math.abs(percentageSeen * 2.2)
  }

  componentWillUnmount() {
    $('body').css('background-color', `transparent`)
    $('.TextAndImage, .StoryOverview').css('opacity', 1)
    $(window).off('scroll');
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
          transition: background-color 1000ms;   
        }
        body.yellow-banner {
          transition: background-color 1000ms 200ms;   
          background-color: #fff000;
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
          background: url('/static/components/yellow-banner/tht-particals-03-rev.png') center top no-repeat;
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
