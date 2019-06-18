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
const EventOverview = dynamic(() => import('./event-overview.js'));

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
        {this.props.event.signupUrl &&
          <div className="flex-1 button-wrapper">
            <Button target="_blank" buttonLink={this.props.event.signupUrl}>
              sign up
            </Button>
          </div>
        }
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
        @media(max-width: 760px) {
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
    const event = await this.fetchEvent(this.props.slug)
    this.setState({ event: this.formatEvent(event) })
  }
  async componentWillReceiveProps(newProps) {
    const event = await this.fetchEvent(newProps.slug)
    this.setState({ event: this.formatEvent(event) })
  }
  async fetchEvent(slug) {
    const response = await fetch(`/api/events/${slug}`)
    return await response.json()
  }
  formatEvent(event) {
    return event.fields
  }
  render() {
    if(! this.state.event) return <div style={{minHeight: '800px'}} />
    return <div className="EventDetails">
      <div className="flex">
        <div className="flex-1 extra-padding">
          <div style={{width: '57px', margin: '24px 0'}}>
            <DateCircle date={this.state.event.datetime} />
          </div>
          {/*<SmallCapsTitle></SmallCapsTitle>*/}
          <div style={{marginTop: '12px'}}>
            <Title>{this.state.event.title}</Title>
          </div>
        </div>
        <div className="flex-1" />
      </div>
      <div className="flex">
        <div className="image-wrapper">
          <img src={this.state.event.smallImage.fields.file.url} />
        </div>
        <div className="flex-1 introTextWrapper">
          <div className="extra-padding">
            <div className="introText">
              {this.state.event.introText}
            </div>
            <div className="detailedText" dangerouslySetInnerHTML={{__html: marked(this.state.event.detailedText)}} />
          </div>
          <EventInfoBlock event={this.state.event} />
        </div>
      </div>
      <div style={{marginBottom: '2rem'}}>
        <Title size="small" align="center" style={{
          marginTop: 'calc(212px - 50px)'
        }}>
          More events
        </Title>
      </div>
      <EventOverview limit="3" />
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
          overflow-x: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }
        .detailedText a {
          color: #ff3e6c;
        }
        .introTextWrapper {
          max-width: 100%;
        }
        .image-wrapper {
          margin-top: 18px;
          max-height: 729px;

          width: 50%;
          padding-bottom: 50%;
          margin: 10% auto;
          position: relative;
          overflow: hidden;
        }
        .image-wrapper img {
          background: center center no-repeat;
          object-fit: cover;
          position: absolute;
          height: 100%;          
        }
        @media(max-width: 760px) {
          .EventDetails > .flex { display: block }
        }
        @media(min-width: 760px) {
          .EventDetails {
            padding-top: 64px;
          }
          .introTextWrapper {
          }
          .image-wrapper {
            margin-top: 0;
            order: 2;
          }
          .image {
            min-width: 200px;
            margin: 18px 32px;
            margin-bottom: 50px;
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
