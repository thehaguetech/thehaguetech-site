import dynamic from 'next/dynamic';
import { Component } from 'react';
import Link from 'next/link';

// Import components
const SmallCapsTitle = dynamic(() => import('./small-caps-title.js'));
const Title = dynamic(() => import('./title.js'));
const DateCircle = dynamic(() => import('./date-circle.js'));

class StoryBlock extends Component {
  render() {
    const slug = this.props.event.slug
    const introText = this.props.event.introText2.length <= 10 ? marked(this.props.event.longText).replace(/<\/?[^>]+(>|$)/g, '').substring(0, 200) : this.props.event.introText2;
    return <Link prefetch href={`/story?slug=${slug}`} as={`/stories/${slug}`}>
      <div className="StoryBlock">
        <header style={{
          backgroundImage: `url( ${this.props.event.smallImage.fields.file.url} )`
        }} />
        <DateCircle date={this.props.event.datetime} />
        <div className="info">
          {/*<SmallCapsTitle size="small">
            {this.props.event.category || 'design'}
          </SmallCapsTitle>*/}
          <Title size="small" style={{
            fontSize: '30px',
            fontWeight: '700',
            lineHeight: '32px'
          }}>
            {this.props.event.title}
          </Title>
          <p>
            {introText}        
          </p>
        </div>
        <div className="gradient" />
        <style jsx>{`
          .StoryBlock {
            height: 524px;
            background: #fff;
            box-shadow: 0 2px 13px rgba(0, 0, 0, 0.2);
            margin: 20px 18px;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            transition: box-shadow 0.3s;
          }
          .StoryBlock:hover {
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            transition: box-shadow 0.2s;
          }
          @media(min-width: 480px) {
            .StoryBlock {
              width: 285px;
            }
          }
          header {
            background: center center / cover no-repeat;
            height: 192px;
          }
          .info {
            padding: 40px 28px;
            font-size: 14px;
            font-weight: 300;
            line-height: 24px;
            font-family: "Maison Neue", sans-serif;
          }
          .gradient {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 60px;
            z-index: 1;
            background-image: linear-gradient(rgba(255, 255, 255, 0.3), #fff);
          }
        `}</style>
      </div>
    </Link>
  }
}

export default StoryBlock;
