import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const ImageBanner = dynamic(() => import('../components/image-banner.js'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Button = dynamic(() => import('../components/button.js'));
const Title = dynamic(() => import('../components/title.js'));
const TextAndImage = dynamic(() => import('../components/text-and-image.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const YellowBanner = dynamic(() => import('../components/yellow-banner.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));
const EventOverview = dynamic(() => import('../components/event-overview.js'));

function EventsAndLabs() {
  return <div className="root">
    <Head>

      <title>Events & Labs | The Hague Tech</title>

      <meta key="og:image" property="og:image" content="https://www.thehaguetech.com/static/pages/meetings-events-labs/meta.jpg" />

    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="Events & Labs"
      title="The #1 Tech Event Location in The Hague"
      image="/static/pages/meetings-events-labs/page-header.jpg"
      />
    <IntroText>
      <p>
        Our members have helped grow The Hague Tech into the top location for tech events in the Hague, from workshops to Meetups to festivals and more! Make sure to follow The Hague Tech on Meetup to see what exciting event is happening next
      </p>
      <p>
        <Button href="https://www.meetup.com/The-Hague-Tech/" target="_blank">
          Follow us on Meetup
        </Button>
      </p>
    </IntroText>
    <TextAndImage
      image=""
      imagePosition="left"
      category=""
      title="Our Innovation Labs"
      text="<p>
        The Hague Tech is home to diverse and engaging labs created by our members and facilitated by THT. Our labs are physical spaces with weekly or monthly Meetups, bringing entrepreneurs and innovators together to stimulate co-working, knowledge exchange, and new projects. The Hague Tech currently houses a blockchain lab (<a href='https://blockbar.nl' target='_blank'>Blockbar</a>), an artificial intelligence lab (<a href='https://ailab.one/' target='_blank'>AI Lab</a>), and the Smart Building Techlab. Additional labs are currently in development, including a government lab and a pension lab. AI Lab was the <a href='https://www.linkedin.com/pulse/hague-europes-4th-fastest-growing-tech-hub-look-charles-weiler-ulin/' target='_blank'>#1 Meetup in The Hague</a> while Blockbar was #3. Our labs helped propel the Hague to the 4th fastest growing tech hub in Europe.
      </p>
      <p>
        Want to join a lab or even start your own? The Hague Tech is the ideal place to start sharing your passion with a group of enthusiastic people ready to collaborate!
      </p>"
      />
    <TextAndImage
      image=""
      imagePosition="right"
      category=""
      title="An Event for Every Interest"
      text="<p>Yearly, The Hague Tech hosts over 200 events ranging from business development, opportunities for talent in technology and international business, legal implications such as GDPR, and subject-specific themes such as artificial intelligence, blockchain, and cyber security. Make sure to take a look at our past events to see the type of exciting content happening daily at The Hague Tech. </p>"
      />

    <IntroText>
      <p style={{fontSize: '24px', lineHeight: '38px'}}>
        Looking to host an inspiring event, start or join one of our innovative labs, or even an entire hackathon? The Hague Tech is providing engaging opportunities at every corner. Contact <a href="mailto:events@thehaguetech.com">events@thehaguetech.com</a> to learn more.
      </p>
      <p>
        <Button href="mailto:events@thehaguetech.com" target="_blank" style={{transform: 'scale(1.4)', marginTop: '20px', marginBottom: '100px'}}>
          Contact us
        </Button>
      </p>
    </IntroText>

    <Title align="center">
      Past events
    </Title>
    <TextAndImage
      image="/static/pages/meetings-events-labs/hubfest.jpg"
      imagePosition="right"
      category=""
      title="Hubfest 2018"
      text="<p>For a two-day event a coalition of The Hague Tech, <a href='http://dutchtechgroup.nl/' target='_blank'>The Dutch Tech Group</a>, and <a href='https://thevault.co' target='_blank'>The Vault San Francisco</a> organized the first edition of <a href='https://hubfest.io' target='_blank'>Hubfest</a> with the goal of uniting the Dutch start-up scene towards internationalization through collaboration. Hubfest was founded to help create and strengthen these networks, giving everyone involved more opportunities to succeed. (<a href='https://www.youtube-nocookie.com/embed/VU0_J6qeXkg?autoplay=1' target='_blank'>video</a>)</p>"
      />
    <TextAndImage
      image="/static/pages/meetings-events-labs/blockchain-innovation-week.jpg"
      imagePosition="left"
      category=""
      title="Blockchain Innovation Week"
      text="<p>Organized and ran by Blockbar, one of our co-working labs in The Hague Tech, <a href='https://blockbar.nl/biw/' href='_blank'>Blockchain Innovation Week</a> provided meetups, workshops, and lectures surrounding blockchain technology. Speakers such as <a href='https://www.rabobank.nl/particulieren/' target='_blank'>Rabobank</a>, <a href='https://komodoplatform.com' target='_blank'>Komodo</a>, <a href='http://ixo.foundation/' target='_blank'>ixo.foundation</a>, <a href='https://www.bitmymoney.com' target='_blank'>BitmyMoney</a> and <a href='https://cryptopepes.io' target='_blank'>CryptoPepes</a> provided unique insight into blockchain projects happening at the time.</p>"
      />
    {/*https://www.studiokordaat.nl/werk/hackathon-peace-justice-security/*/}
    <TextAndImage
      image="/static/pages/meetings-events-labs/hackathon-for-good-3.jpg"
      imagePosition="right"
      category=""
      title="Hackathon for Peace, Justice, and Security"
      text="<p>Organized by the Data Science Initiative of The Hague, the Hackathon for Good has now held two editions at The Hague Tech. Teams from around the world have worked on unique challenges provided by international organizations and NGOS. The Red Cross, the Nato Communications and Information Agency, the ICC, the European Commission Space4Good, and many more issued challenges to hundreds of participants in this annual event.</p>"
      />
    <div align="center">

      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AEQZiwTa060" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" width="1327" height="600" allowFullScreen></iframe>

      <br />
      <br />
      <br />
      <br />

      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/VU0_J6qeXkg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" width="1327" height="600" allowFullScreen></iframe>

      <br />
      <br />
      <br />
      <br />

      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/G0DGfiMkQtQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" width="1327" height="600" allowFullScreen></iframe>

      <br />
      <br />
      <br />
      <br />

      <iframe title="vimeo-player" src="https://player.vimeo.com/video/303223371" width="1327" height="600" frameBorder="0" allowFullScreen hidden></iframe>

    </div>
    <div style={{marginBottom: '2rem'}}>
      <Title align="center">
        <Link prefetch href="/events">
          Our upcoming events
        </Link>
      </Title>
    </div>
    <div>
      <EventOverview limit="3" />
    </div>
    <div>
      <NewsletterSubscribe />
    </div>
    <Footer />
  </div>
}

export default EventsAndLabs;
