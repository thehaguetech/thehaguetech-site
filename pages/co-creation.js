import dynamic from 'next/dynamic';
import Head from 'next/head';

// Load components
const Navigation = dynamic(() => import('../components/navigation.js'));
const ImageBanner = dynamic(() => import('../components/image-banner.js'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const Carousel = dynamic(() => import('../components/carousel.js'));
const TextAndImage = dynamic(() => import('../components/text-and-image.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const YellowBanner = dynamic(() => import('../components/yellow-banner.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));

function CoCreation() {
  return <div className="root">
    <Head>
      <title>Co-creation - The Hague Tech</title>
    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="Co-creation"
      title="Work together on your projects"
      image="/static/pages/international-business/page-header.png"
      />
    <IntroText>
      The Hague is all about co-creation.
    </IntroText>
    <YellowBanner
      title="Come and see for your self what The Hague Tech has to offer you!"
      buttonText="book a tour"
      buttonLink="https://www.bartroorda.nl"
      />
    <NewsletterSubscribe />
    <Footer />
  </div>
}

export default CoCreation;
