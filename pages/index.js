import dynamic from 'next/dynamic';
import Head from 'next/head';

// Load components
const Navigation = dynamic(() => import('../components/navigation.js'));

function App() {
  return <div>
    <Head>
      <title>The Hague Tech</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <Navigation />
    <p>
      App contents
    </p>
  </div>
}

export default App;
