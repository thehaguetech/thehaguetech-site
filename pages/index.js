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

// Define Carousel slides
const slides = [
  {title: 'international business', image: ''}
]

function App() {
  return <div className="root">
    <Head>
      <title>The Hague Tech</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
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
        category="international business"
        title="Set up your business in the innovative heart of The Netherlands"
        text="Is your business looking for... Is your business looking for... Is your business looking for... Is your business looking for... Is your business looking for... Is your business looking for..."
        buttonText="learn more"
        buttonLink="https://www.bartroorda.nl" />
    </div>
    <BookATourBanner />
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
    `}</style>
  </div>
}

export default App;
