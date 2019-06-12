import dynamic from 'next/dynamic';
import Head from 'next/head';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const ImageBanner = dynamic(() => import('../components/image-banner.js'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const TextAndImage = dynamic(() => import('../components/text-and-image.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const YellowBanner = dynamic(() => import('../components/yellow-banner.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));

function EventsAndLabs() {
  return <div className="root">
    <Head>
      <title>Meetings / Events / Labs - The Hague Tech</title>
    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="Meetings/Events/Labs"
      title="Book a meetup, Host an event, or Join one of our cutting edge labs"
      image="/static/pages/meetings-events-labs/page-header.jpg"
      />
    <IntroText>
      <p>
        Success in business is a combination of hard work and luck. Luck can be engineered and we believe encouraging encounters is the best way to stimulate success and luck.
      </p>
      <p>
        Workshops, Meetups, festivals, and get-togethers around what our members in The Hague Tech are involved with leads to new connections and new entrepreneurial opportunities.
      </p>
      <p>
        Our members initiate events (ranging from 20 to 400 people) around themes such as business development, opportunities for talent in technology and international business, legal implications such as GDPR, and subject-specific themes such as artificial intelligence, blockchain, and cyber security. We help facilitate these members and their events through our network, space, and publicity. 
      </p>
      <p>
        In 2018 The Hague Tech hosted multiple large scale events which led to growing networks, knowledge sharing, and collaboration: 
      </p>
    </IntroText>
    <TextAndImage
      image="/static/pages/meetings-events-labs/hubfest.jpg"
      imagePosition="right"
      category=""
      title="Hubfest 2018"
      text="<p>On September 20th and 21st a coalition of The Hague Tech, The Dutch Tech Group and The Vault San Francisco organized the first annual edition of <a href='https://hubfest.io/' target='_blank'>Hubfest</a> with the goal of uniting the Dutch start-up scene towards internationalization through collaboration. Hubfest was founded to help create and strengthen these networks, giving everyone involved more opportunities to succeed. </p>"
      />
    <TextAndImage
      image="/static/pages/meetings-events-labs/blockchain-innovation-week.jpg"
      imagePosition="left"
      category=""
      title="Blockchain Innovation Week"
      text="<p>Organized and ran by Blockbar, one of our coworking labs in The Hague Tech, <a href='https://blockbar.nl/biw/' target='_blank'>Blockchain Innovation Week</a> provided meetups, workshops, and lectures surrounding blockchain technology. Speakers such as Rabobank, Komodo, ixo.foundation, BitmyMoney and CryptoPepes provided unique insight into projects happening at the time around blockchain. </p>"
      />
    {/*https://www.studiokordaat.nl/werk/hackathon-peace-justice-security/*/}
    <TextAndImage
      image="/static/pages/meetings-events-labs/hackathon-for-good-3.jpg"
      imagePosition="right"
      category=""
      title="Hackathon for Peace, Justice, and Security"
      text="<p>The <a href='https://www.hackathonforgood.org/' target='_blank'>Hackathon for Good</a> organized by the Data Science Initiative of The Hague brought together teams from around the world to work on unique challenges provided by international organizations and NGOs. The Red Cross, the NATO Communications and Information Agency, the ICC, World Vision, and Asser Institute issued challenges to the more than 35 teams competing in the first annual hackathon. </p>"
      />
    <IntroText>
      <iframe title="vimeo-player" src="https://player.vimeo.com/video/303223371" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
    </IntroText>
    <IntroText>
      <p>
        A major part of our value creation is the introduction of our labs. Our labs are physical spaces with weekly or monthly meetings that bring entrepreneurs and innovators together. These labs are centered around different themes to stimulate co-working, knowledge exchange, and the creation of new projects. The Hague Tech is currently housing a blockchain lab (Blockbar), an artificial intelligence lab, (AI-Lab The Hague), and the Smart Building Techlab. A pension lab and a government lab are currently in development and will be launched in the near future. AI Lab and Blockbar were founded in 2018 and reached unprecedented levels of success and collaboration. AI Lab was the #1 Meetup in The Hague for 2018 while Blockbar reached the #3 spot. 
      </p>
      <p>
        Want to join a lab or even start your own? The Hague Tech is the ideal place to start spreading your passions through collaborating with enthusiastic participants. There are already new labs in the work for this year and beyond so state up to date on our socials to find your next passion project. 
      </p>
    </IntroText>
    <YellowBanner
      title="Come and see for your self what The Hague Tech has to offer you!"
      buttonText="book a tour"
      buttonLink="https://outlook.office365.com/owa/calendar/TheHagueTech@jongensvantechniek.nl/bookings/"
      target="_blank"
      />
    <NewsletterSubscribe />
    <Footer />
  </div>
}

export default EventsAndLabs;
