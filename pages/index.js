import dynamic from 'next/dynamic';
import Head from 'next/head';

// Load components
const Navigation = dynamic(() => import('../components/navigation.js'));
const VideoBanner = dynamic(() => import('../components/video-banner.js'));

function App() {
  return <div>
    <Head>
      <title>The Hague Tech</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <Navigation />
    <VideoBanner />
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      html, body {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
}

export default App;
