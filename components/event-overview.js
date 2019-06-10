import { Component } from 'react';
import dynamic from 'next/dynamic';
import * as R from 'ramda';

// Import components
const EventBlock = dynamic(() => import('./event-block.js'));

class EventOverview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: {}
    }
  }
  async componentDidMount() {
    const events = await this.fetchEvents()
    this.setState({
      events: this.formatEvents(events)
    })
  }
  async fetchEvents() {
    const response = await fetch('https://thehaguetech-site.herokuapp.com/api/events')
    return await response.json()
  }
  formatEvents(events) {
    return R.map(R.prop('fields'), events)
  }
  render() {
    return <div className="EventOverview">
      <nav className="filters">
        Filters
      </nav>
      <div className="events">
        {R.map((idx) => {
          const event = this.state.events[idx];
          return <EventBlock key={idx} event={event} />
        }, Object.keys(this.state.events))}
      </div>
      <style jsx>{`
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
