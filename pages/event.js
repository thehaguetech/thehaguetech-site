import dynamic from 'next/dynamic';
import { Component } from 'react';
import Head from 'next/head';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const YellowBanner = dynamic(() => import('../components/yellow-banner.js'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const EventDetails = dynamic(() => import('../components/event-details.js'));

class Event extends Component {
  static async getInitialProps({ query }) {
    // Get slug
    return { slug: query.slug };
  }
  render() {
    return <div className="EventPage">
      <Head>
        <title key="title">Event at The Hague Tech</title>
      </Head>
      <Navigation />
      <div style={{height: '132px'}} /> 
      <EventDetails slug={this.props.slug} />
      <BookATourBanner />
      <YellowBanner
        title="Come and see for your self what The Hague Tech has to offer you!"
        buttonText="book a tour"
        buttonLink="https://outlook.office365.com/owa/calendar/TheHagueTech@jongensvantechniek.nl/bookings/"
        target="_blank"
        />
      <Footer />
    </div>
  }
}

export default Event;
