import dynamic from 'next/dynamic';

// Load components
const Title = dynamic(() => import('../components/title.js'));
const Button = dynamic(() => import('../components/button.js'));

function VideoBanner() {
  return <div className="VideoBanner">
    <video className="video" autoPlay loop muted poster="static/components/video-banner/madagascar3.jpg" src="static/components/video-banner/madagascar3.mp4">
      <source src="static/components/video-banner/madagascar3.mp4" type="video/mp4" />
      {/*<source src="static/components/video-banner/madagascar3.webm" type="video/webm" />*/}
      {/*<source src="static/components/video-banner/madagascar3.ogv" type="video/ogg" />*/}
    </video>
    <div className="overlay">
      <Title color="#fff">
        Innovate faster. Better. Together.
      </Title>
      <div className="subtitle">
        Collaborate with our community to bring your tech ideas to life.
      </div>
      <div className="button-wrapper">
        <Button>
          Book a tour
        </Button>
      </div>
    </div>
    <style jsx>{`
      .VideoBanner {
        position: relative;
        color: #fff;
        width: 100%;
        height: 100%;
      }
      .video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        min-height: 100vh;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: 71px 10% 0 10%;
        display: flex;
        justify-content: space-around;
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
        min-height: 26px;
        color: #FFFFFF;
        font-family: "Maison Neue", sans-serif;
        font-weight: 500;
        font-size: 0.4em;
        line-height: 1.5em;
        padding: 0 10%;
      }
      .button-wrapper {
        margin-top: 1rem;
      }
    `}</style>
  </div>
}

export default VideoBanner;
