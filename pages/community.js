import dynamic from 'next/dynamic';
import Head from 'next/head';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const ImageBanner = dynamic(() => import('../components/image-banner.js'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const TextAndImage = dynamic(() => import('../components/text-and-image.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const YellowBanner = dynamic(() => import('../components/yellow-banner.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));
const FullWidthImage = dynamic(() => import('../components/full-width-image.js'));

function Community() {
  return <div className="root">
    <Head>
      <title>Community - The Hague Tech</title>
    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="Community"
      title="Join a vibrant and exciting community of doers"
      image="/static/pages/community/community.jpg"
      style={{backgroundPosition: 'center top'}}
      />
    <IntroText>
      <p>
        The core of The Hague Tech is our international and diverse community of entrepreneurs, freelancers, startups, scaleups, corporations, governments, and more! Build your network, build your business, and build your friendships all within our passionate community. 
      </p>
    </IntroText>
    <TextAndImage
      image="/static/pages/coworking/coworking.jpg"
      category="community"
      title="Becoming a member"
      text="The easiest way to become part of our community and start sharing value? Become a member of The Hague Tech today and see everything we have to offer! Having a membership includes access to our events and innovation labs. We co-create workshops, meetups, and events with our partners, and you! Our spaces are your playground for knowledge exchange and collaboration. Attend one of the many events offered each month and see for yourself while grabbing a beer with a peer. After all, the best ideas are said to be written on a beer coasters!"
      buttonText="book a tour"
      buttonLink="https://outlook.office365.com/owa/calendar/TheHagueTech@jongensvantechniek.nl/bookings/"
      anchorName="community"
      />
    <Title align="center" size="small">
      Our Community at a glance
    </Title>
    <FullWidthImage image="/static/pages/index/community.jpg" />

    {/*
    (Community Statistics Needed) - Main Point of Focus
    (Company Statistics Needed) - Profiles
    (People) -Profiles, show off our best (i.e. most interesting 
    */}
    <div>
      <YellowBanner
        title="Come and see for your self what The Hague Tech has to offer you!"
        buttonText="book a tour"
        buttonLink="https://outlook.office365.com/owa/calendar/TheHagueTech@jongensvantechniek.nl/bookings/"
        target="_blank"
        />
    </div>
    <NewsletterSubscribe />
    <Footer />
  </div>
}

export default Community;
