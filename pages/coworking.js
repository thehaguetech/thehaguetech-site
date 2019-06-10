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
      <title>Coworking - The Hague Tech</title>
    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="Coworking"
      title="Accelerate your project"
      image="/static/pages/community/page-header.png"
      />
    <IntroText>
      Below you see all coworking sessions. AI Lab is every Thursdays from 2pm. Blockbar on Fridays from 10am.
    </IntroText>
    <NewsletterSubscribe />
    <Footer />
  </div>
}

export default Community;
