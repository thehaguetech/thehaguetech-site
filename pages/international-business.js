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

function InternationalBusiness() {
  return <div className="root">
    <Head>
      <title>International Business - The Hague Tech</title>
    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="International Business"
      title="Set up your business in The Hague"
      image="/static/pages/international-business/page-header.jpg"
      />
    <IntroText>
      Is your business looking to enter the Dutch market or set up a base of operations here in Holland? The Hague Tech is an internationally focused organization with a local presence and knowledge base. 
    </IntroText>
    <div>
      <TextAndImage
        image="/static/pages/international-business/partnership.jpg"
        category=""
        title="Partnership"
        text="With partnerships in Brazil, Silicon Valley, South Africa, and around the world, The Hague Tech is at the heart of globalization and internationalization while still understanding the need for local infrastructure and communities."
        />
      <TextAndImage
        image="/static/pages/international-business/facilitation.jpg"
        imagePosition="right"
        category=""
        title="Facilitation"
        text="<p>We facilitate international entrepreneurs and offers a path to growing your business in Europe, centered in The Hague. The program consists of business development, introductions to business networks, and startup visas for staying in the Netherlands. We work in collaboration with The Hague Business Agency, InnovationQuarter, and NFIA.</p><p>Joining The Hague Tech’s Soft Landing Program is the most effective and forward thinking path to growing your business in The Netherlands, the gateway to Europe.</p>"
        />
      <ImageBanner
        image="/static/pages/international-business/quote-charles.png"
        SmallCapsTitle="Charles Weiler-Ulin  |  Founder Holland Park Media"
        title="“The Hague Tech helped me get a startup visa and introduced me to one of the most international and diverse networks and community that I’ve ever been a part of.”"
        buttonText="Become a member"
        buttonLink="/join-community"
        />
      <TextAndImage
        image="/static/pages/international-business/why-thehague.png"
        category=""
        title=""
        text="Situated in the political heart of The Netherlands, The Hague is a short train ride away from other major hubs in Rotterdam, Utrecht, and Amsterdam. The Hague was Europe’s 4th fastest growing tech hub in 2018 and the city is on a mission to accelerate innovation and talent. The Hague is the seat of the Dutch government and houses major multinational companies Dutch Royal Shell and AEGON. Internationals and expats are abundant in The Hague, leading to an internationally focused and open working environment that doesn’t forget the importance of work life balance. The Hague beyond being a central business hub is also the city by the sea, with the beach only a 10 minute tram ride away. "
        />
    </div>
    <div>
      <YellowBanner
        title="Come and see for your self what The Hague Tech has to offer you!"
        buttonText="book a tour"
        buttonLink="https://outlook.office365.com/owa/calendar/TheHagueTech@jongensvantechniek.nl/bookings/"
        target="_blank"
        />
    </div>
    <NewsletterSubscribe />
    <Footer />
  </div>
}

export default InternationalBusiness;
