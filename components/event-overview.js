import { Component } from 'react';
import dynamic from 'next/dynamic';
import * as R from 'ramda';
import moment from 'moment';

// Import components
const EventBlock = dynamic(() => import('./event-block.js'));

class EventOverview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: null
    }
  }
  async componentDidMount() {
    let events;
    events = await this.fetchEvents()
    events = this.formatEvents(events)
    events = this.filterEvents(events)
    events = this.sortEvents(events)// Order chronologically
    this.setState({ events: events })
  }
  async fetchEvents() {
    const response = await fetch('/api/events')
    return await response.json()
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
  removeDuplicates(events) {
    // Don't show duplicates (2 events with the same title)
    let newEvents = [], uniqueEventTitles = []
    for(let idx in events) {
      if(uniqueEventTitles.indexOf(events[idx].title) > -1) continue;
      uniqueEventTitles.push(events[idx].title)
      newEvents.push(events[idx])
    }
    return newEvents;
  }
  render() {
    if(! this.state.events) return <div style={{minHeight: '800px'}} />
    return <div className="EventOverview">
      <nav className="filters" hidden>
        Filters
      </nav>
      <div className="events">
        {R.map((idx) => {
          const event = this.state.events[idx];
          return <EventBlock key={idx} event={event} />
        }, Object.keys(this.state.events))}
      </div>
      <style jsx>{`
        .EventOverview {
          width: 1000px;
          max-width: 100%;
          margin: 0 auto 48px;
        }
        .EventOverview .events {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  }
}

export default EventOverview;
