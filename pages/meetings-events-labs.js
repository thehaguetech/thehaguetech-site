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
      <title>Meetings / Events / Labs - The Hague Tech</title>
    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="Meetings, Events & Labs"
      title="The #1 Tech Event Location in The Hague "
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
      text="<p>The Hague Tech is home to diverse and engaging labs created by our members and facilitated by THT. Our labs are physical spaces with weekly or monthly Meetups, bringing entrepreneurs and innovators together to stimulate co-working, knowledge exchange, and new projects. The Hague Tech currently houses a blockchain lab (Blockbar), an artificial intelligence lab (AI Lab), and the Smart Building Techlab. Additional labs are currently in development, including a government lab and a pension lab. AI Lab was the #1 Meetup in The Hague in 2018 while Blockbar was #3. Our labs helped propel the Hague to the 4th fastest growing tech hub in Europe. </p><p>Want to join a lab or even start your own? The Hague Tech is the ideal place to start sharing your passion with a group of enthusiastic people ready to collaborate!</p>"
      />
    <TextAndImage
      image=""
      imagePosition="right"
      category=""
      title="An Event for Every Interest"
      text="<p>In 2018 alone, The Hague Tech hosted over 200 events ranging from business development, opportunities for talent in technology and international business, legal implications such as GDPR, and subject-specific themes such as artificial intelligence, blockchain, and cyber security. Make sure to take a look at our past events to see the type of exciting content happening daily at The Hague Tech. </p>"
      />
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
      text="<p>Organized by the Data Science Initiative of The Hague, the Hackathon for Good has now held two editions at The Hague Tech. Teams from around the world have worked on unique challenges provided by international organizations and NGOS. The Red Cross, the Nato Communications and Information Agency, the ICC, the European Commission Space4Good, and many more issued challenges to hundreds of participants in this annual event.  </p>"
      />
    <div align="center">
      <iframe title="vimeo-player" src="https://player.vimeo.com/video/303223371" width="1327" height="600" frameBorder="0" allowFullScreen></iframe>
    </div>
    <div>
      <YellowBanner
        title="Come and see for your self what The Hague Tech has to offer you!"
        buttonText="book a tour"
        buttonLink="https://outlook.office365.com/owa/calendar/TheHagueTech@jongensvantechniek.nl/bookings/"
        target="_blank"
        />
    </div>
    <IntroText>
      <p>
        A major part of our value creation is the introduction of our labs. Our labs are physical spaces with weekly or monthly meetings that bring entrepreneurs and innovators together. These labs are centered around different themes to stimulate co-working, knowledge exchange, and the creation of new projects. The Hague Tech is currently housing a blockchain lab (Blockbar), an artificial intelligence lab, (AI-Lab The Hague), and the Smart Building Techlab. A pension lab and a government lab are currently in development and will be launched in the near future. AI Lab and Blockbar were founded in 2018 and reached unprecedented levels of success and collaboration. AI Lab was the #1 Meetup in The Hague for 2018 while Blockbar reached the #3 spot. 
      </p>
      <p>
        Want to join a lab or even start your own? The Hague Tech is the ideal place to start spreading your passions through collaborating with enthusiastic participants. There are already new labs in the work for this year and beyond so state up to date on our socials to find your next passion project. 
      </p>
    </IntroText>
    <Title align="center">
      Labs
    </Title>
    <TextAndImage
      image="/static/pages/meetings-events-labs/ailab.jpg"
      imagePosition="left"
      category=""
      title="Discover what artificial intelligence can do for you"
      text="<p><a href='https://www.meetup.com/AI-Lab/' target='_blank'>AI Lab</a> is an active community that organizes lectures, workshops, MMOOCS, coworking days, congresses and hackthons. It's a good place to meet fellow machine learning & artificial intelligence enthusiasts. Make sure you check out the <a href='https://www.youtube.com/channel/UCQreT88kXvrioxFYkuKV02g/videos' target='_blank'>video series</a> as well, that you can support <a href='https://www.patreon.com/ailab' target='_blank'>via Patreon</a>.</p>"
      />
    <TextAndImage
      image="/static/pages/meetings-events-labs/blockbar-2.jpg"
      imagePosition="right"
      category=""
      title="Open Blockchain Lab The Hague"
      text="<p>Ever wondered what the future of value looks like? Value like internet transactions, personal identity, car data sharing, truthful journalistic works.. Blockchain offered a new way to secure data, and makes collaboration easier. At <a href='https://www.meetup.com/blockbar/' target='_blank'>Blockbar</a> we work on projects, discuss developments and exchange knowledge by doing talks and workshops. If you want to learn or create related to blockchain & decentralized systems around it, join on Fridays. Blockbar is the The Hague based space where you cowork with likeminded people and develop your dApps.</p>"
      />
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
