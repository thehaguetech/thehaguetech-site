import dynamic from 'next/dynamic';

// Load components
const Title = dynamic(() => import('../components/title.js'));
const Button = dynamic(() => import('../components/button.js'));
const SmallCapsTitle = dynamic(() => import('../components/small-caps-title.js'));

function BookATourBanner() {
  return <div className="BookATourBanner">
    <div>
      <div className="black-overlay"></div>
    </div>
    <div className="placeholder">
      &nbsp;
    </div>
    <div className="text-wrapper">
      <Title color="#fff">
        "The Hague Tech is a place for everyone. Book a tour with me and find out yourself."
      </Title>
      <div style={{ margin: '1rem 0' }}>
        <SmallCapsTitle>
          Olga Wielders | Community Manager
        </SmallCapsTitle>
      </div>
      <br /><br />
      <Button buttonLink="https://outlook.office365.com/owa/calendar/bookings@thehaguetech.com/bookings/" target="_blank">
        Book a tour
      </Button>
    </div>
    <style jsx>{`
      .BookATourBanner {
        background: #000 center left no-repeat;
        background-image: url('/static/components/book-a-tour-banner/olga.jpg');
        background-size: auto 100%;
        background-position: -198px 50%;
        position: relative;
        color: #fff;
        padding: 3rem 1rem;
        display: flex;
        justify-content: space-around;
        margin-bottom: 3rem;
      }
      .black-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(81, 81, 81, 0.5);
      }
      @media (min-width: 480px) {
        .BookATourBanner {
          margin-bottom: 0;
          min-height: 821px;

          background-size: cover;
          background-position: unset;
        }
      }
      .placeholder {
        flex: 6;
      }
      .text-wrapper {
        z-index: 1;
        position: relative;
        flex: 4;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
    `}</style>
  </div>
}

export default BookATourBanner;
