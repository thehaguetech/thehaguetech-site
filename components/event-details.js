import dynamic from 'next/dynamic';
import { Component } from 'react';
import Head from 'next/head';
import * as R from 'ramda';
import marked from 'marked';
import moment from 'moment';

// Load components
const Title = dynamic(() => import('../components/title.js'));
const SmallCapsTitle = dynamic(() => import('../components/small-caps-title.js'));
const DateCircle = dynamic(() => import('./date-circle.js'));
const Button = dynamic(() => import('./button.js'));

class EventInfoBlock extends Component {
  render() {
    return <div className="EventInfoBlock">
      <div className="flex">
        <div className="flex-1">
          <h2>Location</h2>
          <p>
            The Hague Tech<br />
          </p>
          <h2>Date & time</h2>
          <p>
            {moment(this.props.event.date).format('MMMM Do YYYY')}
          </p>
        </div>
        <div className="flex-1 button-wrapper">
          <Button>sign up</Button>
        </div>
      </div>
      <style jsx>{`
        .EventInfoBlock {
          background-color: #f8f8f8;
          padding: 28px 32px;

          color: #071124;
          font-family: "Maison Neue", sans-serif;
          font-size: 17px;
          font-weight: 300;
          line-height: 24px;
          margin: 50px 0;
        }
        h2 {
          color: #ff3e6c;
          font-family: "Maison Neue", sans-serif;
          font-size: 17px;
          font-weight: 300;
          text-transform: uppercase;
        }
        .button-wrapper {
          text-align: right;
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          padding-bottom: 17px;
        }
        @media(max-width: 480px) {
          .EventInfoBlock > .flex {
            display: block;
          }
          .button-wrapper {
            text-align: left;
            padding-top: 14px;
            padding-bottom: 14px;
        }
      `}</style>
    </div>
  }
}

class EventDetails extends Component {
  constructor(props) {
    super(props)

    this.state = { event: null }
  }
  async componentDidMount() {
    const events = await this.fetchEvent()
    this.setState({ event: this.formatEvent(events) })
  }
  async fetchEvent() {
    const response = await fetch(`/api/events/${this.props.slug}`)
    return await response.json()
  }
  formatEvent(event) {
    return event.fields
  }
  render() {
    if(! this.state.event) return <div>Loading event</div>
    return <div className="EventDetails">
      <div className="flex">
        <div className="flex-1 extra-padding">
          <div style={{width: '57px', margin: '24px 0'}}>
            <DateCircle date={this.state.event.datetime} />
          </div>
          <SmallCapsTitle>Design</SmallCapsTitle>
          <div style={{marginTop: '12px'}}>
            <Title>{this.state.event.title}</Title>
          </div>
        </div>
        <div className="flex-1" />
      </div>
      <div className="flex">
        <div className="flex-1 image-wrapper">
          <img src={this.state.event.smallImage.fields.file.url} alt="" className="image" />
        </div>
        <div className="flex-1">
          <div className="extra-padding">
            <div className="introText">
              {this.state.event.introText}
            </div>
            <div className="detailedText" dangerouslySetInnerHTML={{__html: marked(this.state.event.detailedText)}} />
          </div>
          <EventInfoBlock event={this.state.event} />
        </div>
      </div>
      <style jsx>{`
        .EventDetails {
          width: 1245px;
          max-width: 100%;
          padding: 0 18px;
          margin: 0 auto;
        }
        .introText {
          color: #0f2247;
          font-family: "Maison Neue", sans-serif;
          font-size: 24px;
          font-weight: 500;
          line-height: 32px;
        }
        .detailedText {
          color: #0f2247;
          font-family: "Maison Neue", sans-serif;
          font-size: 19px;
          font-weight: 300;
          line-height: 32px;
        }
        .image-wrapper {
          margin-top: 18px;
        }

        @media(max-width: 480px) {
          .EventDetails > .flex { display: block }
        }
        @media(min-width: 480px) {
          .image-wrapper {
            margin-top: 0;
            order: 2;
          }
          .image {
            margin: 18px 32px;
            width: calc(100% - 32px - 32px);
            position: sticky;
            top: 104px;
          }
          .extra-padding {
            padding: 0 30px;
          }
        }
      `}</style>
    </div>
  }
}

export default EventDetails;
