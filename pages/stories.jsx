import dynamic from 'next/dynamic';
import Head from 'next/head';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const YellowBanner = dynamic(() => import('../components/yellow-banner.js'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const StoryOverview = dynamic(() => import('../components/story-overview.jsx'));

function Stories() {
  return <div className="StoriesPage">
    <Head>

      <title key="title">Stories & News | The Hague Tech</title>

      <meta key="og:title" property="og:title" content="Stories & News | The Hague Tech" />
      <meta key="og:image" property="og:image" content="https://www.thehaguetech.com/static/pages/stories/meta.jpg" />
      <meta key="og:description" property="og:description" content="Read the latest from around The Hague Tech community and see the progress happening everyday. See why The Hague Tech is the premier location for startups, scaleups, and governments in The Hague." />
      <meta key="description" name="description" content="Read the latest from around The Hague Tech community and see the progress happening everyday. See why The Hague Tech is the premier location for startups, scaleups, and governments in The Hague." />

    </Head>
    <Navigation />
    <div>
      <PageHeader
        image="/static/pages/events/page-header.jpg"
        smallCapsTitle="stories"
        title="Read the latest news"
        />
      <IntroText>

      </IntroText>
      <Title align="center" size="small">
        Stories at The Hague Tech
      </Title>
      <StoryOverview />
    </div>
    <div>
      <YellowBanner
        title="Come and see for your self what The Hague Tech has to offer you!"
        buttonText="book a tour"
        buttonLink="https://outlook.office365.com/owa/calendar/TheHagueTech@jongensvantechniek.nl/bookings/"
        target="_blank"
        />
    </div>
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

export default Stories;
