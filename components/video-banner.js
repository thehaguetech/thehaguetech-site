import dynamic from 'next/dynamic';

// Load components
const Title = dynamic(() => import('../components/title.js'));
const Button = dynamic(() => import('../components/button.js'));

function VideoBanner() {
  const images = [
    '2019_THT-OPENING-EN-HACKATON_sacha grootjans-188.jpg',
    '2019_THT-OPENING-EN-HACKATON FIXED_sacha grootjans-126.jpg',
    '2019_THT-OPENING-EN-HACKATON_sacha grootjans-01-LOW-RESOLUTION-1200px.jpg',
    '2019_THT-OPENING-EN-HACKATON_sacha grootjans-40.jpg',
    '2019_THT-OPENING-EN-HACKATON_sacha grootjans-87.jpg',
    '2019_THT-OPENING-EN-HACKATON_sacha grootjans-174.jpg',
    '2019_THT-OPENING-EN-HACKATON_sacha grootjans-180.jpg',
    '2019_THT-OPENING-EN-HACKATON_sacha grootjans-191.jpg',
    '2019_THT-OPENING-EN-HACKATON_sacha grootjans-203.jpg'
  ]
  const randomFromArray = (items) => items[Math.floor(Math.random()*items.length)]
  return <div className="VideoBanner">
    {/*<video className="video" autoPlay loop muted poster="/static/components/video-banner/madagascar3.jpg" src="static/components/video-banner/madagascar3.mp4">*/}
    <video className="video" autoPlay loop muted poster={`/static/components/index-slider/${randomFromArray(images)}`}></video>
    <div className="overlay">
      <Title color="#fff">
        Innovate faster. Better. Together.
      </Title>
      <div>
        <div className="subtitle">
          Collaborate with our community to bring your tech ideas to life.
        </div>
        <div className="button-wrapper">
          <Button href="https://outlook.office365.com/owa/calendar/TheHagueTech@jongensvantechniek.nl/bookings/" target="_blank">
            Book a tour
          </Button>
        </div>
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

export default VideoBanner;
