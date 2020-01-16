import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const ImageBanner = dynamic(() => import('../components/image-banner.js'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Button = dynamic(() => import('../components/button.js'));
const Title = dynamic(() => import('../components/title.js'));
const TextAndImage = dynamic(() => import('../components/text-and-image.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const YellowBanner = dynamic(() => import('../components/yellow-banner.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));
const EventOverview = dynamic(() => import('../components/event-overview.js'));

function EventsAndLabs() {
  return <div className="root">
    <Head>

      <title>Meeting Spaces | The Hague Tech</title>
      <meta key="og:title" property="og:title" content="Meeting Spaces" />
      <meta key="og:image" property="og:image" content="https://www.thehaguetech.com/static/pages/stories/meta.jpg" />
      <meta key="og:description" property="og:description" content="From two person negotiations to a full company workshop" />
      <meta key="description" name="description" content="From two person negotiations to a full company workshop" />

    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="Meeting Spaces"
      title="From two person negotiations to a full company workshop"
      image="/static/pages/events/page-header.jpg"
      />
    <IntroText>
      <p>
        In order to better facilitate our community, we offer awesome services for external members, and a needed service, The Hague Tech offers a variety of meeting rooms to perfectly serve whatever your needs may be. Our meeting rooms give innovative parties the opportunity to meet and share knowledge while offering an alternative to companies and entrepreneurs who don’t need full time office space. Our meeting rooms keep our hub dynamic, always bringing new and exciting people through our doors.
      </p>
    </IntroText>
    <TextAndImage
      image=""
      imagePosition="left"
      category=""
      title="Your Home for Meetings"
      text="<p>We offer a range of spaces from small meeting rooms for 2 to 6 people to our large event spaces where you can gather with large groups. Use of rooms in combination to host a company workshop in our event space, using the smaller meeting rooms as breakout rooms for groups, or find a new and innovative way to make use of our spaces. Our event manager and hosts are ready to make your stay enjoyable, with coffee and catering as an additional possibility.</p>"
      />

    <IntroText>
      <p style={{fontSize: '24px', lineHeight: '38px'}}>
        Looking to host a design sprint, use a lab space, or even an entire hackathon? Our spaces are designed to be flexible and accommodating so that any meeting you host will be a success!
      </p>
      <p style={{fontSize: '24px', lineHeight: '38px'}}>
        Interested in one of our meeting rooms? Please contact <a href="mailto:facilities@thehaguetech.com">facilities@thehaguetech.com</a> and let us know how we can help you. 
      </p>
      <p>
        <Button href="mailto:facilities@thehaguetech.com" target="_blank" style={{transform: 'scale(1.4)', marginTop: '20px', marginBottom: '100px'}}>
          Contact us
        </Button>
      </p>
    </IntroText>
    <div>
      <NewsletterSubscribe />
    </div>
    <Footer />
  </div>
}

export default EventsAndLabs;
