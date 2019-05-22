import dynamic from 'next/dynamic';
import Head from 'next/head';

// Load components
const Navigation = dynamic(() => import('../components/navigation.js'));
const VideoBanner = dynamic(() => import('../components/video-banner.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const Carousel = dynamic(() => import('../components/carousel.js'));
const TextAndImage = dynamic(() => import('../components/text-and-image.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const YellowBanner = dynamic(() => import('../components/yellow-banner.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));

// Define Carousel slides
const slides = [
  {title: 'international business', image: ''}
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
      The Hague Tech is a hub with a diverse and forward thinking Community and a platform for innovation. Of course this is not all. Charles will write some more interesting stuff here.
    </IntroText>
    <div>
      <Title align="center">
        What we can offer you
      </Title>
      <Carousel slides={slides} />
      <TextAndImage
        image="/static/pages/index/international-business.jpg"
        category="international business"
        title="Set up your business in the innovative heart of The Netherlands"
        text="Is your business looking to enter the Dutch market or set up a base of operations here in Holland? The Hague Tech is an internationally focused organization with a local presence and knowledge base. With partnerships in Brazil, Silicon Valley, South Africa, and around the world, The Hague Tech is at the heart of globalization and internationalization while still understanding the need for local infrastructure and communities."
        buttonText="learn more"
        buttonLink="https://www.bartroorda.nl"
        />
      <TextAndImage
        image="/static/pages/index/cocreation.jpg"
        imagePosition="right"
        category="co-creation"
        title="Co-create and innovate with our multi-talented community"
        text="The Hague Tech is an inspiring place to collaborate with talented individuals and innovative companies. But we strive to be and do more, to nurture an environment of co-creation. Co-creation means working together to create prototypes, products, technological solutions and beyond by activating the talent within The Hague Tech. Our community is filled with talented members looking to work together on new and exciting challenges. "
        buttonText="learn more"
        buttonLink="https://www.bartroorda.nl"
        />
      <TextAndImage
        image="/static/pages/index/community.jpg"
        category="community"
        title="Join a vibrant and exciting community of doers"
        text="A collection of highly talented people is the indispensable basis of our ecosystem. Passionate and driven individuals should be facilitated in meeting each other easily and frequently. We provide this through the work space in the heart of our ecosystem. Together as a community we welcome in new members based on core values such as proactiveness, professionalism, and an openness to work and achieve together. "
        buttonText="learn more"
        buttonLink="https://www.bartroorda.nl"
        />
    </div>
    <BookATourBanner />
    <TextAndImage
      image="/static/pages/index/meetings.jpg"
      imagePosition="right"
      category="meetings / events / labs"
      title="Book a meetup, host an event, or join one of our cutting edge labs"
      text="Success in business is a combination of hard work and luck. Luck can be engineered and we believe encouraging encounters is the best way to stimulate success and luck. Workshops, Meetups, festivals, and get-togethers around what our members in The Hague Tech are involved with leads to new connections and new entrepreneurial opportunities. "
      buttonText="learn more"
      buttonLink="https://www.bartroorda.nl"
      />
    <TextAndImage
      image="/static/pages/index/coworking.jpg"
      category="co-working"
      title="Find your new workspace or office best fit for your needs"
      text="We offer workspaces in fixed or flexible options in the general working areas or in closed areas. Our packages range from 1 day per week up to 24/7 access. Renting a desk will provide you with everything the ecosystem has to offer, our mission to provide hyper-location-as-a-service. "
      buttonText="learn more"
      buttonLink="https://www.bartroorda.nl"
      />
    <YellowBanner
      title="Come and see for your self what The Hague Tech has to offer you!"
      buttonText="book a tour"
      buttonLink="https://www.bartroorda.nl"
      />
    <NewsletterSubscribe />
    <Footer />
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        min-height: 100%;
      }
      body {
        font-size: 8px;
      }
      img {
        max-width: 100%;
      }
      /* Noe Display */
      @font-face {
          font-family: 'Noe Display';
          src: url("/static/fonts/noe-display/noe-display-regular.ttf") format("opentype");
          font-weight: normal;
          font-style: normal;
      }
      @font-face {
          font-family: 'Noe Display';
          src: url("/static/fonts/noe-display/noe-display-bold.ttf") format("opentype");
          font-weight: bold;
          font-style: normal;
      }
      /* Maison Mono */
      @font-face {
          font-family: 'maison_monobold';
          src: url('/static/fonts/maison-mono/maison_mono_bold-webfont.woff2') format('woff2'),
               url('/static/fonts/maison-mono/maison_mono_bold-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
      @font-face {
          font-family: 'maison_monoitalic';
          src: url('/static/fonts/maison-mono/maison_mono_italic-webfont.woff2') format('woff2'),
               url('/static/fonts/maison-mono/maison_mono_italic-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
      @font-face {
          font-family: 'maison_monolight';
          src: url('/static/fonts/maison-mono/maison_mono_light-webfont.woff2') format('woff2'),
               url('/static/fonts/maison-mono/maison_mono_light-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
      @font-face {
          font-family: 'maison_monoregular';
          src: url('/static/fonts/maison-mono/maison_mono_regular-webfont.woff2') format('woff2'),
               url('/static/fonts/maison-mono/maison_mono_regular-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
      /* Maison Neue */
      @font-face {
          font-family: 'maison_neuebook_italic';
          src: url('/static/fonts/maison-neue/maisonneuebookitalic-webfont.woff2') format('woff2'),
               url('/static/fonts/maison-neue/maisonneuebookitalic-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
      @font-face {
          font-family: 'maison_neuebold_italic';
          src: url('/static/fonts/maison-neue/maisonneuebolditalic_1-webfont.woff2') format('woff2'),
               url('/static/fonts/maison-neue/maisonneuebolditalic_1-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
      @font-face {
          font-family: 'maison_neuebold';
          src: url('/static/fonts/maison-neue/maisonneuebold-webfont.woff2') format('woff2'),
               url('/static/fonts/maison-neue/maisonneuebold-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
      @font-face {
          font-family: 'Maison Neue';
          src: url('/static/fonts/maison-neue/maisonneuebook-webfont.woff2') format('woff2'),
               url('/static/fonts/maison-neue/maisonneuebook-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
      @font-face {
          font-family: 'maison_neuebold_italic';
          src: url('/static/fonts/maison-neue/maisonneuebolditalic-webfont.woff2') format('woff2'),
               url('/static/fonts/maison-neue/maisonneuebolditalic-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
    `}</style>
  </div>
}

export default App;
