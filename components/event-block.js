import { Component } from 'react';

// Import components
// const EventBlock = dynamic(() => import('./event-block.js'));

class EventBlock extends Component {
  render() {
    return <div className="EventBlock">
      fd
      {this.props.event.title}
      <style jsx>{`
        .EventBlock {
        }
      `}</style>
    </div>
  }
}

export default EventBlock;
