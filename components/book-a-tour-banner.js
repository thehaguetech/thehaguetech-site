import dynamic from 'next/dynamic';

// Load components
const Title = dynamic(() => import('../components/title.js'));
const Button = dynamic(() => import('../components/button.js'));
const SmallCapsTitle = dynamic(() => import('../components/small-caps-title.js'));

function BookATourBanner() {
  return <div className="BookATourBanner">
    <div className="placeholder">
      &nbsp;
    </div>
    <div className="text-wrapper">
      <Title color="#fff">
        "The Hague Tech is a place for everyone. Book a tour with me and find out yourself."
      </Title>
      <SmallCapsTitle>
        Olga Wilders | Community Manager
      </SmallCapsTitle>
      <br /><br />
      <Button>
        Book a tour
      </Button>
    </div>
    <style jsx>{`
      .BookATourBanner {
        background: #000 center left no-repeat;
        background-image: url('/static/components/book-a-tour-banner/olga.jpg');
        background-size: cover;
        position: relative;
        color: #fff;
        padding: 2rem 24px;
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
      }
      @media (min-width: 480px) {
        .BookATourBanner {
          margin-bottom: 0;
          min-height: 821px;
        }
      }
      .placeholder {
        flex: 6;
      }
      .text-wrapper {
        flex: 4;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
    `}</style>
  </div>
}

export default BookATourBanner;
