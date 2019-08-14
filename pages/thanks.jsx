import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const Title = dynamic(() => import('../components/title.js'));
const Footer = dynamic(() => import('../components/footer.js'));

function Thanks() {
  return <div className="root">
    <Head>
      <title>Thanks - The Hague Tech</title>
    </Head>

    <Navigation />

    <div className="content-wrapper">
      <Title size="large">
        Thank you!
      </Title>
    </div>

    <Footer />

    <style jsx global>{`
      .content-wrapper {
        padding: 140px 12px;
        width: 800px;
        max-width: 100%;
        margin: 0 auto;
      }
    `}</style>
  </div>
}

export default Thanks;
