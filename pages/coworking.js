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
      <title>Co-working / Office / Place to work - The Hague Tech</title>
    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="Coworking"
      title="Find your new workspace or office best fit for your needs"
      image="/static/pages/community/page-header.jpg"
      />
    <IntroText>
      <p>
        We offer workspaces in fixed or flexible options in the general working areas or in closed areas. Our packages range from 1 day per week up to 24/7 access. Renting a desk will provide you with everything the ecosystem has to offer, our mission to provide hyper-location-as-a-service.
      </p>
      <p>
        Are you an entrepreneur with an appetite for innovation? Do you need more than a top notch office with just an espresso machine? And want to be part of the most fast growing tech-community in The Hague? Join The Hague Tech community, 11,000 m² of genius, know-how and can-do.
      </p>
    </IntroText>
    <TextAndImage
      image=""
      imagePosition="right"
      category=""
      title="We provide open working spaces"
      text="<p>At The Hague Tech you will meet enough people that are worth talking a bit longer to in person. Our mini lounges are just the place for this.</p>"
      />
    <TextAndImage
      image=""
      imagePosition="left"
      category=""
      title="Enjoy some friendly competition"
      text="<p>Meet one of our members and invite them to a match of Ping Pong or a game of pool. Try out your skills in table soccer or just relax in our gaming corner equipped with a historic library of consoles and games. </p>"
      />
    <TextAndImage
      image=""
      imagePosition="right"
      category=""
      title="Show your best self"
      text="<p>Need to impress a potential client or investor? Take advantage of our fully equipped board rooms to hold that important meeting. Need to have a team meeting, or a creative discussion, make use of our lab and meeting rooms to help boost your thought power. </p>"
      />
    <NewsletterSubscribe />
    <Footer />
  </div>
}

export default Community;
