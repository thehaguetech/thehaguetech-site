import dynamic from 'next/dynamic';
import Head from 'next/head';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const ImageBanner = dynamic(() => import('../components/image-banner.js'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const TextAndImage = dynamic(() => import('../components/text-and-image.js'));
const SmallCapsTitle = dynamic(() => import('../components/small-caps-title.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const YellowBanner = dynamic(() => import('../components/yellow-banner.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));
const ContactForm = dynamic(() => import('../components/contact-form.js'));

function Contact() {
  return <div className="Contact">
    <Head>
      <title>Join community - The Hague Tech</title>
    </Head>
    <Navigation />
    <div style={{height: '132px'}} /> 
    <div className="contact-wrapper">
      <SmallCapsTitle>
        Yeah!
      </SmallCapsTitle>
      <br />
      <Title size="small">
        Join our community
      </Title>
      <p>
         The Hague Tech is a grand base to work from. Our building is situated in the heart of The Hague, at walking distance from Laan van NOI and next to the highway A12. The city centre of The Hague is close by, but you can also reach Delft, Amsterdam, Rotterdam and Utrecht in no time. 
      </p>
      <ContactForm type="join-community" />
    </div>
    <BookATourBanner />
    <NewsletterSubscribe />
    <Footer />
    <style jsx>{`
      .Contact {
      }
      .contact-wrapper {
        width: 1245px;
        max-width: 100%;
        padding: 0 18px;
        margin: 0 auto;
      }
    `}</style>
  </div>
}

export default Contact;
