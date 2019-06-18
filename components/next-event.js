import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Component } from 'react'
import * as R from 'ramda'
import moment from 'moment'
import marked from 'marked'

// Import helpers
import {getEvents} from '../helpers/localStorage.js'

// Import components
const SmallCapsTitle = dynamic(() => import('./small-caps-title.js'));
const Title = dynamic(() => import('./title.js'));
const DateCircle = dynamic(() => import('./date-circle.js'));

class NextEvent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      event: null
    }
  }
  async componentDidMount() {
    let events;
    events = await getEvents()
    events = this.formatEvents(events)
    events = this.filterEvents(events)
    events = this.sortEvents(events)// Order chronologically
    this.setState({ event: events[0] })
  }
  formatEvents(events) {
    return R.map(R.prop('fields'), events)
  }
  filterEvents(events) {
    // Limit amount of events
    events = R.slice(0, (this.props.limit || 20), events)
    // Only show events of the future
    const isFutureEvent = (event) => {
      const now = moment()
      const daysToEvent = moment(event.datetime).diff(now, 'days')
      // If event happens in the future from now, return true
      return daysToEvent >= 0
    }
    events = R.filter(isFutureEvent, events)
    // Return future events
    return events;
  }
  sortEvents(events) {
    return events.reverse();
  }
  render() {
    if(! this.state.event) return <div />
    const slug = this.state.event.datetime.split('T')[0] + '/' + this.state.event.slug
    const introText = this.state.event.introText.length <= 10 ? marked(this.state.event.detailedText).replace(/<\/?[^>]+(>|$)/g, '').substring(0, 200) : this.state.event.introText;
    return <Link prefetch href={`/event?slug=${slug}`} as={`/events/${slug}`}>
      <div className="NextEvent">
        <h1>
          What is happening?
        </h1>
        <div className="EventBlock">
          <header style={{
            backgroundImage: `url( ${this.state.event.smallImage.fields.file.url} )`
          }} />
          <div className="date-circle-wrapper">
            <DateCircle date={this.state.event.datetime} />
          </div>
          <div className="info">
            {/*<SmallCapsTitle size="small">
              {this.state.event.category || 'design'}
            </SmallCapsTitle>*/}
            <Title size="small" style={{
              fontSize: '30px',
              fontWeight: '700',
              lineHeight: '32px'
            }}>
              {this.state.event.title}
            </Title>
            <p>
              {introText}        
            </p>
            <div className="gradient" />
          </div>
        </div>
        <style jsx>{`
          .NextEvent {
            margin-top: 18px;
            margin-left: 39px;
            height: 269px;
            border-left: 1px solid #979797;
            padding: 0 32px;
            display: none;
          }
          @media(min-width: 1300px) {
            .NextEvent {
              display: block;
            }
          }
          h1 {
            width: 242px;
            height: 31px;
            color: #0f2247;
            font-family: "Noe Display", sans-serif;
            font-size: 27px;
            font-weight: 700;
            margin: 0;
            margin-bottom: 0.5rem;
          } 
          .EventBlock {
            width: 566px;
            height: 232px;
            background: #fff;
            box-shadow: 0 2px 13px rgba(0, 0, 0, 0.2);
            margin: 0;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
          }
          .EventBlock:hover {
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            transition: box-shadow 0.2s;
            transition: all 0.4s cubic-bezier(.08,.82,.17,1);
            transform: scale(1.02);
          }
          header {
            background: center center / cover no-repeat;
            min-width: 194px;
            max-width: 194px;
            width: 194px;
            height: 232px;
          }
          header::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(0,0,0,0.05);
            width: 194px;
            height: 232px;
          }
          .date-circle-wrapper {
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin-left: -29px
          }
          .info {
            padding: 21px 17px;
            position: relative;
          }
          .info p {
            font-family: "Maison Neue", sans-serif;
            font-size: 14px;
            font-weight: 300;
            line-height: 24px;
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

export default NextEvent;
