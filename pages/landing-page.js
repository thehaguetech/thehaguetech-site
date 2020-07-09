import dynamic from 'next/dynamic';
import { Component } from 'react';
import Head from 'next/head';
import marked from "marked";
import Link from "next/link";

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const YellowBanner = dynamic(() => import('../components/yellow-banner.js'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const Button = dynamic(() => import('../components/button.js'));

class LandingPage extends Component {
    static async getInitialProps({ query }) {
        // Get slug
        return { slug: query.slug };
    }
    constructor(props) {
        super(props);

        this.state = { landing_page: null, content: null }
    }
    async componentDidMount() {
        const event = await this.fetchLandingPage(this.props.slug);
        await this.formatContent(event);
    }
    async componentWillReceiveProps(newProps) {
        const event = await this.fetchLandingPage(newProps.slug);
        await this.formatContent(event);
    }
    async fetchLandingPage(slug) {
        const response = await fetch(`/api/landing-pages/${slug}`);
        return await response.json();
    }
    formatLandingPage(landingPage) {
        return landingPage.fields
    }
   async formatContent(event) {
        const content = await event.fields.content.content;
        let contentParagraphs = await [];
        await content.forEach((data) => {
            contentParagraphs.push(`<p>${data.content[0].value}</p>`);
        });

       await this.setState({ landing_page: this.formatLandingPage(event), content: contentParagraphs });

    }
    render() {
        if(! this.state.landing_page) return <div style={{minHeight: '800px'}} />;
        return <div className="LandingPage">
            <Head>
                <title key="title">{ this.state.landing_page.title }</title>
            </Head>
            <Navigation />
            <div style={{height: '132px'}} />
            <div>
                <div className="VideoBanner">
                    <video className="video" autoPlay loop muted poster={this.state.landing_page.headerImage.fields.file.url}></video>
                    <div className="overlay">
                        <Title color="#fff">
                            { this.state.landing_page.title }
                        </Title>
                        <div>
                            <div className="subtitle">
                                { this.state.landing_page.subTitle }
                            </div>
                            <div className="button-wrapper">
                                <Button href={this.state.landing_page.url} target="_blank">
                                    { this.state.landing_page.headerButtonText }
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pageContent" dangerouslySetInnerHTML={{__html: this.state.content}}></div>
            <div>
                <YellowBanner
                    title={this.state.landing_page.tagLine}
                    buttonText={this.state.landing_page.tagLineButtonText}
                    buttonLink={this.state.landing_page.tagLineUrl}
                    target="_blank"
                />
            </div>
            <Footer />
            <style jsx>{`
      .VideoBanner {
        position: relative;
        color: #fff;
        width: 100%;
        height: 100%;
      }
      
      .pageContent {
            padding: 5% 30%;
            text-align:center;
       }
      
      @media only screen and (max-width: 800px) {
        .pageContent {
            padding: 5%;
            text-align:center;
       }
      }
   
      .video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        display: block;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: calc(112px + 1rem) 10% 1rem 10%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background: rgba(0,0,0,0.4);
        text-align: center;
        font-size: 3rem;
      }
      @media (min-width: 480px) {
        .overlay {
          justify-content: center;
          padding-top: 102px 10% 0 10%;
        }
      }
      .subtitle {
        margin: 24px 0;
        min-height: 26px;
        color: #FFFFFF;
        font-family: "Maison Neue", sans-serif;
        font-weight: 500;
        font-size: 0.4em;
        line-height: 1.5em;
        padding: 0 10%;
      }
      @media(min-width: 480px) {
        .Title {
          text-shadow: 0 2px 17px rgba(0, 0, 0, 0.5);
        }
        .subtile {
          font-size: 11px;
          line-height: 28pxp;
        }
      }
      .button-wrapper {
        margin-top: 1rem;
      }
    `}</style>
        </div>
    }
}

export default LandingPage;