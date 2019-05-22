import { Component } from 'react';
import dynamic from 'next/dynamic';
import * as R from 'ramda';

// Import components
const EventBlock = dynamic(() => import('./event-block.js'));

class EventOverview extends Component {
  render() {
    const the_events = [
      {title: 'something'}
    ];
    return <div className="EventOverview">
      <nav className="filters">
        Filters
      </nav>
      <div className="events">
        {R.map((event) => {
          return <EventBlock key={event.title} event={event} />
        }, the_events)}
      </div>
      <style jsx>{`
        .EventOverview {
        }
      `}</style>
    </div>
  }
}

export default EventOverview;
