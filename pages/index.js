import dynamic from 'next/dynamic';
import Head from 'next/head';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const VideoBanner = dynamic(() => import('../components/video-banner.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const Carousel = dynamic(() => import('../components/carousel/carousel.js'));
const TextAndImage = dynamic(() => import('../components/text-and-image.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const YellowBanner = dynamic(() => import('../components/yellow-banner.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));

// Define Carousel slides
const slides = [
  {
    title: 'community',
    href: '#community',
    image: '/static/components/carousel/tht-icon-community.svg',
    imageHeight: 106
  },
  {
    title: 'co-working',
    href: '#coworking',
    image: '/static/components/carousel/tht-icon-coworking.svg',
    imageHeight: 104
  },
  // {
  //   title: 'meeting center',
  //   href: '#meeting-center',
  //   image: '/static/components/carousel/tht-icon-coworking.svg',
  //   imageHeight: 104
  // },
  {
    title: 'events & labs',
    href: '#meetings-events-labs',
    image: '/static/components/carousel/tht-icon-events.svg',
    imageHeight: 90
  },
  {
    title: 'international business',
    href: '#international-business',
    image: '/static/components/carousel/tht-icon-business.svg',
    imageHeight: 108
  },
  {
    title: 'co-creation',
    href: '#co-creation',
    image: '/static/components/carousel/tht-icon-cocreate.svg',
    imageHeight: 118
  },
]

function App() {
  return <div className="root">
    <Head>
      <title>The Hague Tech</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <link href="/static/favicon.ico" rel="icon" type="image/x-icon" />
    </Head>
    <Navigation />
    <VideoBanner />
    <IntroText>
      The Hague Tech is a hub with a diverse and forward-thinking Community and a platform for innovation.
    </IntroText>
    <div>
      <div>
        <Title align="center" size="small">
          What we can offer you
        </Title>
      </div>
      <div>
        <Carousel slides={slides} />
      </div>
      <TextAndImage
        image="/static/pages/index/community.jpg"
        category="community"
        title="Join a vibrant and exciting community of doers"
        text="A collection of highly talented people is the indispensable basis of our ecosystem. Passionate and driven individuals should be facilitated in meeting each other easily and frequently. We provide this through the work space in the heart of our ecosystem. Together as a community we welcome in new members based on core values such as proactiveness, professionalism, and an openness to work and achieve together. "
        buttonText="learn more"
        buttonLink="/community"
        anchorName="community"
        />
      <TextAndImage
        image="/static/pages/index/coworking.jpg"
        imagePosition="right"
        category="co-working"
        title="Find your new workspace or office best fit for your needs"
        text="We offer workspaces in fixed or flexible options in the general working areas or in closed areas. Our packages range from 1 day per week up to 24/7 access. Renting a desk will provide you with everything the ecosystem has to offer, our mission to provide hyper-location-as-a-service. "
        buttonText="learn more"
        buttonLink="/coworking"
        anchorName="coworking"
        />
    </div>
    <div>
      <BookATourBanner />
    </div>
    <br />
    <br />
    <div>
      <TextAndImage
        image="/static/pages/index/meetings.jpg"
        imagePosition="right"
        category="meetings / events / labs"
        title="Book a meetup, host an event, or join one of our cutting edge labs"
        text="Success in business is a combination of hard work and luck. Luck can be engineered and we believe encouraging encounters is the best way to stimulate success and luck. Workshops, Meetups, festivals, and get-togethers around what our members in The Hague Tech are involved with leads to new connections and new entrepreneurial opportunities. "
        buttonText="learn more"
        buttonLink="/meetings-events-labs"
        anchorName="meetings-events-labs"
        />
    </div>
    <div>
      <TextAndImage
        image="/static/pages/index/international-business.jpg"
        category="international business"
        title="Set up your business in the innovative heart of The Netherlands"
        text="Is your business looking to enter the Dutch market or set up a base of operations here in Holland? The Hague Tech is an internationally focused organization with a local presence and knowledge base. With partnerships in Brazil, Silicon Valley, South Africa, and around the world, The Hague Tech is at the heart of globalization and internationalization while still understanding the need for local infrastructure and communities."
        buttonText="learn more"
        buttonLink="/international-business"
        anchorName="international-business"
        />
    </div>
    <div>
      <TextAndImage
        image="/static/pages/index/cocreation.jpg"
        imagePosition="right"
        category="co-creation"
        title="Co-create and innovate with our multi-talented community"
        text="The Hague Tech is an inspiring place to collaborate with talented individuals and innovative companies. But we strive to be and do more, to nurture an environment of co-creation. Co-creation means working together to create prototypes, products, technological solutions and beyond by activating the talent within The Hague Tech. Our community is filled with talented members looking to work together on new and exciting challenges. "
        buttonText="learn more"
        buttonLink="/co-creation"
        anchorName="co-creation"
        />
    </div>
    <div>
      <YellowBanner
        title="Come and see for your self what The Hague Tech has to offer you!"
        buttonText="book a tour"
        buttonLink="https://outlook.office365.com/owa/calendar/TheHagueTech@jongensvantechniek.nl/bookings/"
        target="_blank"
        />
    </div>
    <div>
      <NewsletterSubscribe />
    </div>
    <div>
      <Footer />
    </div>
  </div>
}

export default App;
