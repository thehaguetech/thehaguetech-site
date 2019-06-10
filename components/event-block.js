import dynamic from 'next/dynamic';
import { Component } from 'react';
import moment from 'moment';

// Import components
const SmallCapsTitle = dynamic(() => import('./small-caps-title.js'));
const Title = dynamic(() => import('./title.js'));

class EventBlock extends Component {
  render() {
    return <div className="EventBlock">
      <header style={{
        backgroundImage: `url( ${this.props.event.smallImage.fields.file.url} )`
      }} />
      <div className="date" title={moment(this.props.event.datetime).format('MMMM Do YYYY')}>
        <div className="date-month">
          {moment(this.props.event.datetime).format('MMM')}
        </div>
        <div className="date-number">
          {moment(this.props.event.datetime).format('D')}
        </div>
      </div>
      <div className="info">
        <SmallCapsTitle size="small">
          {this.props.event.category || 'design'}
        </SmallCapsTitle>
        <Title size="small" style={{
          fontSize: '30px',
          fontWeight: '700',
          lineHeight: '32px'
        }}>
          {this.props.event.title}
        </Title>
        <p>
          {this.props.event.introText}        
        </p>
      </div>
      <div className="gradient" />
      <style jsx>{`
        .EventBlock {
          height: 524px;
          background: #fff;
          box-shadow: 0 2px 13px rgba(0, 0, 0, 0.2);
          width: 285px;
          margin: 20px 18px;
          overflow: hidden;
          position: relative;
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
        .date {
          width: 57px;
          height: 57px;
          background-color: #ff3e6c;
          margin: -28px auto 0;
          border-radius: 57px;
          color: #fff;
          text-align: center;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        .date-month {
          height: 14px;
          color: #ffffff;
          font-family: "Maison Neue", sans-serif;
          font-size: 12px;
          font-weight: 300;
          text-transform: uppercase;
          text-align: center;
        }
        .date-number {
          color: #ffffff;
          font-family: "Maison Neue Bold", sans-serif;
          font-size: 22px;
          font-weight: 700;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  }
}

export default EventBlock;
