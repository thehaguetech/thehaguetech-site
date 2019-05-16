import dynamic from 'next/dynamic';

// Load components
// const Navigation = dynamic(() => import('../components/navigation'));

function VideoBanner() {
  return <div className="VideoBanner">
    <video className="video" autoPlay loop muted poster="static/components/video-banner/madagascar3.jpg" src="static/components/video-banner/madagascar3.mp4">
      <source src="static/components/video-banner/madagascar3.mp4" type="video/mp4" />
      {/*<source src="static/components/video-banner/madagascar3.webm" type="video/webm" />*/}
      {/*<source src="static/components/video-banner/madagascar3.ogv" type="video/ogg" />*/}
    </video>
    <div className="overlay">
      <div className="title">
        Innovate faster. Better. Together.
      </div>
      <div className="subtitle">
        Collaborate with our community to bring your tech ideas to life.
      </div>
      <div>
        <a href="#" className="button">
          Book a tour
        </a>
      </div>
    </div>
    <style jsx>{`
      .VideoBanner {
        position: relative;
        color: #fff;
      }
      .video {
        width: 100%;
        display: block;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: 0 5%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background: rgba(0,0,0,0.4);
        font-size: 1.8em;
      }
      @media (min-width: 480px) {
        .overlay {
          padding: 0 20%;
          font-size: 2.1em;
        }
      }
      @media (min-width: 640px) {
        .overlay {
          padding: 0 15%;
          font-size: 3em;
        }
      }
      @media (min-width: 720px) {
        .overlay {
          font-size: 4em;
        }
      }
      .title {
        color: #FFFFFF;
        font-family: "Noe Display", serif;
        font-weight: bold;
        font-size: 1em;
        line-height: 1.1em;
        text-shadow: 0 2px 17px 0 rgba(0,0,0,0.5);
        margin: 0.2em 0;
      }
      @media (min-width: 1200px) {
        .title {
          margin: 0 0;
        }
      }
      .subtitle {
        min-height: 26px;
        color: #FFFFFF;
        font-family: "Maison Neue", sans-serif;
        font-weight: 500;
        font-size: 0.6em;
        line-height: 1.2em;
        margin-bottom: 0.7em;
      }
      @media (min-width: 720px) {
        .subtitle {
          font-size: 0.34375em;
          line-height: 1.2em;
        }
      }
      .button {
        display: inline-block;
        min-width: 164px;
        max-width: 100%;
        min-height: 40px;
        line-height: 40px;
        background-color: #FEFF3E;
        box-shadow: 0 2px 6px 0 rgba(0,0,0,0.25);
        cursor: pointer;

        color: #071124;
        font-family: "Maison Neue", sans-serif;
        font-size: 16px;
        font-weight: 300;
        text-align: center;
        text-decoration: none;
        text-transform: lowercase;
      }
      @media (min-width: 480px) {
        .button {
          min-height: 56px;
          line-height: 56px;
        }
      }
    `}</style>
  </div>
}

export default VideoBanner;
