import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const Pricing = dynamic(() => import('../components/pricing.jsx'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));
const Footer = dynamic(() => import('../components/footer.js'));

function Community() {
  return <div className="root">
    <Head>

      <title>Pricing | The Hague Tech</title>

      <meta key="og:title" property="og:title" content="Pricing | The Hague Tech" />
      <meta key="og:image" property="og:image" content="https://www.thehaguetech.com/static/pages/pricing/meta.jpg" />
      <meta key="og:description" property="og:description" content="Interested in becoming a member, renting an office, hosting an event, or an offsite meeting? The Hague Tech is the perfect location for entrepreneurs, businesses, governments, and more." />
      <meta key="description" name="description" content="Interested in becoming a member, renting an office, hosting an event, or an offsite meeting? The Hague Tech is the perfect location for entrepreneurs, businesses, governments, and more." />

    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="Become a member"
      title="Become a member of The Hague Tech"
      image="/static/pages/pricing/featured.jpg"
      style={{backgroundPosition: 'center top'}}
      />
    <div>
      <Pricing />
    </div>
    <div>
      <NewsletterSubscribe />
    </div>
    <Footer />
  </div>
}

export default Community;
