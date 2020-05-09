import Head from 'next/head';
import React from 'react';
import App, { Container } from 'next/app';
const contentful = require('contentful')

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    let story = null, event = null;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);

      // Init Contentful connection
      const client = await contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      })

      // Get story based on slug
      story = await client.getEntries({
        content_type: 'story',
        'fields.slug': pageProps.slug,
        limit: 1
      })
        .then((entry) => entry.items[0])
        .catch(console.error)

      // Get event based on slug
      event = await client.getEntries({
        content_type: 'event',
        'fields.slug': pageProps.slug,
        limit: 1
      })
        .then((entry) => entry.items[0])
        .catch(console.error)
    }
    
    return { pageProps, story, event }
  }

  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js")
        .catch(err => console.error("Service worker registration failed", err));
    } else {
      console.log("Service worker not supported");
    }
  }

  getMeta(props) {
    const { story, event } = props;
    const imageBaseUrl = "https://images.contentful.com/";

    // Set default meta tags
    let meta = {
      imageUrl: 'https://www.thehaguetech.com/static/pages/index/meta.jpg',
      title: 'The Hague Tech',
      description: 'The largest tech community in The Hague, Netherlands offering office space, co-working space, event space, meeting space, co-creation labs, startup visa programme.',
    }

    // If this is a story, set story meta tags
    if(story) {
      meta.imageUrl = imageBaseUrl + story.fields.smallImage.fields.file.url.slice(23)
      meta.title = story.fields.title
      meta.description = story.fields.longText.split("\n")[0]
    }

    // If this is a event, set event meta tags
    if(event) {
      meta.imageUrl = imageBaseUrl + event.fields.smallImage.fields.file.url.slice(23)
      meta.title = event.fields.title
      meta.description = event.fields.longText.split("\n")[0]
    }

    return meta;
  }

  render() {
    const { Component, pageProps, story, event } = this.props;
    const meta = this.getMeta({story, event})

    return (
      <Container>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/safari-pinned-tab.svg"
            color="#0f2247"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />

          <meta
            key="og:title"
            property="og:title"
            content={meta.title}
          />
          <meta
            key="og:image"
            property="og:image"
            content={meta.imageUrl}
          />
          <meta
            key="og:description"
            property="og:description"
            content={meta.description}
          />
          <meta
            key="description"
            name="description"
            content={meta.description}
          />

          <link href="/static/tht-favicon@2x.png" rel="icon" type="image/x-icon" />
          <script dangerouslySetInnerHTML={{
          __html: `(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:1360764,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')`}} />
          <script dangerouslySetInnerHTML={{
          __html: `(function (i, s, o, g, r, a, m) {
              i['GoogleAnalyticsObject'] = r;
              i[r] = i[r] ||
                  function () {
                      (i[r].q = i[r].q || []).push(arguments)
                  }, i[r].l = 1 * new Date();
              a = s.createElement(o),
                  m = s.getElementsByTagName(o)[0];
              a.async = 1;
              a.src = g;
              m.parentNode.insertBefore(a, m)
          })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
          ga('create', 'UA-96526829-1', 'auto');
          ga('send', 'pageview');`}} />
        <script dangerouslySetInnerHTML={{
          __html: `var appInsights=window.appInsights||function(a){
            function b(a){c[a]=function(){var b=arguments;c.queue.push(function(){c[a].apply(c,b)})}}var c={config:a},d=document,e=window;setTimeout(function(){var b=d.createElement("script");b.src=a.url||"https://az416426.vo.msecnd.net/scripts/a/ai.0.js",d.getElementsByTagName("script")[0].parentNode.appendChild(b)});try{c.cookie=d.cookie}catch(a){}c.queue=[];for(var f=["Event","Exception","Metric","PageView","Trace","Dependency"];f.length;)b("track"+f.pop());if(b("setAuthenticatedUserContext"),b("clearAuthenticatedUserContext"),b("startTrackEvent"),b("stopTrackEvent"),b("startTrackPage"),b("stopTrackPage"),b("flush"),!a.disableExceptionTracking){f="onerror",b("_"+f);var g=e[f];e[f]=function(a,b,d,e,h){var i=g&&g(a,b,d,e,h);return!0!==i&&c["_"+f](a,b,d,e,h),i}}return c
          }({
            instrumentationKey: '2641f469-13f8-484f-a57f-39daebccd54c'
          });
          window.appInsights=appInsights,appInsights.queue&&0===appInsights.queue.length&&appInsights.trackPageView();`}} />
        </Head>
        <style jsx global>{`
          * {
            box-sizing: border-box;
          }
          video, iframe {
            max-width: 100%;
          }
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            min-height: 100%;
          }
          html {
            overflow-x: hidden;
            overflow: auto;
          }
          body {
            font-size: 8px;
          }
          .root {
            overflow: hidden;
          }
          img {
            max-width: 100%;
          }
          p,
          li {
            font-family: "Maison Neue", sans-serif;
            max-width: 100%;
            font-size: 17px;
            line-height: 24px;
          }
          p > :global(a) {
            color: #1126a9;
            padding-bottom: 0;
            border-bottom: 1px solid rgba(15, 34, 72, 0.3);
            text-decoration: none;
          }
          p > :global(a:visited) {
            color: #0f2247;
          }
          .flex {
            display: flex;
            justify-content: space-between;
          }
          .flex-1 { flex: 1 } 
          .flex-column { flex-direction: column; }
          .show-on-mobile-only { display: block }
          @media(min-width: 480px) { .show-on-mobile-only { display: none } }
          /* Noe Display */
          @font-face {
              font-family: 'Noe Display';
              src: url("/static/fonts/noe-display/noe-display-regular.ttf") format("opentype");
              font-weight: normal;
              font-style: normal;
              font-display: fallback;
          }
          @font-face {
              font-family: 'Noe Display';
              src: url("/static/fonts/noe-display/noe-display-bold.ttf") format("opentype");
              font-weight: bold;
              font-style: normal;
              font-display: fallback;
          }
          /* Maison Mono */
          @font-face {
              font-family: 'maison_monobold';
              src: url('/static/fonts/maison-mono/maison_mono_bold-webfont.woff2') format('woff2'),
                   url('/static/fonts/maison-mono/maison_mono_bold-webfont.woff') format('woff');
              font-weight: normal;
              font-style: normal;
              font-display: fallback;
          }
          @font-face {
              font-family: 'maison_monoitalic';
              src: url('/static/fonts/maison-mono/maison_mono_italic-webfont.woff2') format('woff2'),
                   url('/static/fonts/maison-mono/maison_mono_italic-webfont.woff') format('woff');
              font-weight: normal;
              font-style: normal;
              font-display: fallback;
          }
          @font-face {
              font-family: 'maison_monolight';
              src: url('/static/fonts/maison-mono/maison_mono_light-webfont.woff2') format('woff2'),
                   url('/static/fonts/maison-mono/maison_mono_light-webfont.woff') format('woff');
              font-weight: normal;
              font-style: normal;
              font-display: fallback;
          }
          @font-face {
              font-family: 'maison_monoregular';
              src: url('/static/fonts/maison-mono/maison_mono_regular-webfont.woff2') format('woff2'),
                   url('/static/fonts/maison-mono/maison_mono_regular-webfont.woff') format('woff');
              font-weight: normal;
              font-style: normal;
              font-display: fallback;
          }
          /* Maison Neue */
          @font-face {
              font-family: 'maison_neuebook_italic';
              src: url('/static/fonts/maison-neue/maisonneuebookitalic-webfont.woff2') format('woff2'),
                   url('/static/fonts/maison-neue/maisonneuebookitalic-webfont.woff') format('woff');
              font-weight: normal;
              font-style: normal;
              font-display: fallback;
          }
          @font-face {
              font-family: 'maison_neuebold_italic';
              src: url('/static/fonts/maison-neue/maisonneuebolditalic_1-webfont.woff2') format('woff2'),
                   url('/static/fonts/maison-neue/maisonneuebolditalic_1-webfont.woff') format('woff');
              font-weight: normal;
              font-style: normal;
              font-display: fallback;
          }
          @font-face {
              font-family: 'maison_neuebold';
              src: url('/static/fonts/maison-neue/maisonneuebold-webfont.woff2') format('woff2'),
                   url('/static/fonts/maison-neue/maisonneuebold-webfont.woff') format('woff');
              font-weight: normal;
              font-style: normal;
              font-display: fallback;
          }
          @font-face {
              font-family: 'Maison Neue';
              src: url('/static/fonts/maison-neue/maisonneuebook-webfont.woff2') format('woff2'),
                   url('/static/fonts/maison-neue/maisonneuebook-webfont.woff') format('woff');
              font-weight: normal;
              font-style: normal;
              font-display: fallback;
          }
          @font-face {
              font-family: 'maison_neuebold_italic';
              src: url('/static/fonts/maison-neue/maisonneuebolditalic-webfont.woff2') format('woff2'),
                   url('/static/fonts/maison-neue/maisonneuebolditalic-webfont.woff') format('woff');
              font-weight: normal;
              font-style: normal;
              font-display: fallback;
          }

        `}</style>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
