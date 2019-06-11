import Head from 'next/head';
import React from 'react';
import App, { Container } from 'next/app';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <link href="/static/tht-favicon@2x.png" rel="icon" type="image/x-icon" />
        </Head>
        <Component {...pageProps} />
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
          html {
            overflow-x: hidden;
            overflow: auto;
          }
          body {
            font-size: 8px;
          }
          img {
            max-width: 100%;
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
      </Container>
    );
  }
}

export default MyApp;
