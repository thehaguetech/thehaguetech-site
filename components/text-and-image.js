import dynamic from 'next/dynamic';
import React, { Component } from 'react';
import $ from 'jquery'

// Load components
const Title = dynamic(() => import('./title.js'));
const Button = dynamic(() => import('./button.js'));
const SmallCapsTitle = dynamic(() => import('./small-caps-title.js'));

class TextAndImage extends Component {

  componentDidMount() {
    // this.backgroundImageParallax($(`.TextAndImage[data-title='${this.props.title}'] .image-wrapper`), 0.25);
  }

  backgroundImageParallax($object, multiplier) {
    // The function
    multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
    multiplier = 1 - multiplier;
    var $doc = $(document);
    $object.css({ "background-attachment" : "fixed" });
    $(window).scroll(function(){
      var from_top = $doc.scrollTop(),
          bg_css = '0px ' +(multiplier * from_top) + 'px';
      $object.css({"background-position" : bg_css });
    });
  }

  render() {
    return <div className="TextAndImage" data-title={this.props.title} id={this.props.anchorName}>
      <div className="image-wrapper" style={{
        backgroundImage: `url(${this.props.image})`,
        order: this.props.imagePosition  == 'right' ? 1 : 0
      }}>
        <img src={this.props.image} className="image" />
      </div>
      <div className="text-wrapper">

        <SmallCapsTitle>
          {this.props.category}
        </SmallCapsTitle>

        <Title size="small">
          {this.props.title}
        </Title>

        <div className="text" dangerouslySetInnerHTML={{__html: this.props.text}} />

        {this.props.buttonLink && <Button
          href={this.props.buttonLink}
          hidden={! this.props.buttonText}
          >
          {this.props.buttonText || 'learn more'}
        </Button>}

      </div>
      <style jsx>{`
        .TextAndImage {
          color: #0F2247;
          font-family: "Maison Neue", sans-serif;
          font-size: 1.2rem;
          font-weight: 500;
          line-height: 2rem;
          text-align: left;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          width: 1327px;
          max-width: 100%;
          margin: 0 auto;
        }
        .text-wrapper {
          width: 100%;
        }
        @media (max-width: 960px) {
          .image-wrapper {
            order: 0 !important;
          }
        }
        .image {
          display: block;
        }
        .text-wrapper {
          padding: 2rem 16px 6rem;
        }
        .text {
          margin: 2rem 0 3rem 0;
          font-size: 17px;
          line-height: 24px;
        }
        /* On desktop: show full size image */
        @media (min-width: 960px) {
          .TextAndImage {
            min-height: 480px;
            flex-wrap: nowrap;
            padding: 0 24px;
            margin: 128px auto;
          }
          .image-wrapper,
          .text-wrapper {
            flex: 1;
            width: 50%;
          }
          .image-wrapper {
            background-image: none;
            background-size: cover;
            background-position: center center;
          }
          .image {
            display: none;
          }
          .text-wrapper {
            padding: 0 114px;
          }
          .text {
            font-size: 19px;
            line-height: 32px;
          }
        }
      `}</style>
    </div>
  }
}

export default TextAndImage;
