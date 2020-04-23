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

function Community() {
  return <div className="root">
    <Head>
      <title>Co-Working Space | The Hague Tech</title>

      <meta key="og:title" property="og:title" content="Co-Working Space | The Hague Tech" />
      <meta key="og:image" property="og:image" content="https://www.thehaguetech.com/static/pages/coworking/meta.jpg" />
      <meta key="og:description" property="og:description" content="The Hague Tech offers the premier co-working environment in The Hague, with fixed or flexible options that perfectly match what you and your business needs. From 1 day a week to 24/7 we have flex desks in our open office space" />
      <meta key="description" name="description" content="The Hague Tech offers the premier co-working environment in The Hague, with fixed or flexible options that perfectly match what you and your business needs. From 1 day a week to 24/7 we have flex desks in our open office space" />

    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="Co-Working"
      title="The perfect working environment to follow your passion"
      image="/static/pages/coworking/coworking.jpg"
      />
    <IntroText>
      <p>
        The Hague Tech offers the premier co-working environment in The Hague, with fixed or flexible options that perfectly match what you and your business needs. From 1 day a week to 24/7 we have flex desks in our open office space as well as closed offices available for rent. Great standing desks? Got it! Amazing coffee? Got it! A fun and vibrant environment? Got it! Our next great addition? you!
      </p>
    </IntroText>
    <TextAndImage
      image=""
      imagePosition="right"
      category=""
      title="Your Home in The Hague"
      text="<p>Are you an entrepreneur with an appetite for innovation? Do you need more than a top notch office with just an espresso machine? And do you want to be part of the fastest growing tech-community in The Hague? Join The Hague Tech community and see how impactful the right environment can be for your business. Located in an easy to access location, with an open floor plan and spacious offices, your desk is waiting for you. </p><p>Visit <a href='/pricing' target='_blank'>pricing</a> to see all of our available packages and find what suits you.  </p>"
      />
    <TextAndImage
      image=""
      imagePosition="left"
      category=""
      title="Enjoy some friendly competition"
      text="<p>No, not business competition. Ping pong, foosball, pool, FIFA, arcades, and more! We encourage our members to work together, to share knowledge, and to grow as a community. But that doesn’t mean we don’t like to break out the competitive spirit and have some fun. Try out your skills in table soccer or just relax in our gaming corner equipped with a historic library of consoles and games.</p>"
      />
    <NewsletterSubscribe />
    <Footer />
  </div>
}

export default Community;
