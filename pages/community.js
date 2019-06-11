import dynamic from 'next/dynamic';
import Head from 'next/head';

// Load components
const Navigation = dynamic(() => import('../components/navigation.js'));
const ImageBanner = dynamic(() => import('../components/image-banner.js'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const TextAndImage = dynamic(() => import('../components/text-and-image.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const YellowBanner = dynamic(() => import('../components/yellow-banner.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));

function Community() {
  return <div className="root">
    <Head>
      <title>Community - The Hague Tech</title>
    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="Community"
      title="Join a vibrant and exciting community of doers"
      image="/static/pages/community/page-header.jpg"
      />
    <IntroText>
      <p>
        A collection of highly talented people is the indispensable basis of our ecosystem. Passionate and driven individuals should be facilitated in meeting each other easily and frequently. We provide this through the work space in the heart of our ecosystem.
      </p>
      <p>
        Together as a community we welcome in new members based on core values such as proactiveness, professionalism, and an openness to work and achieve together. Those who believe in doing well are who drive our responsibility to make sure talented people meet each other.
      </p>
    </IntroText>
    {/*
    (Community Statistics Needed) - Main Point of Focus
    (Company Statistics Needed) - Profiles
    (People) -Profiles, show off our best (i.e. most interesting 
    */}
    <YellowBanner
      title="Come and see for your self what The Hague Tech has to offer you!"
      buttonText="book a tour"
      buttonLink="https://outlook.office365.com/owa/calendar/TheHagueTech@jongensvantechniek.nl/bookings/"
      target="_blank"
      />
    <NewsletterSubscribe />
    <Footer />
  </div>
}

export default Community;
