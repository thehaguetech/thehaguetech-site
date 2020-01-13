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

      <title>Contact Us | The Hague Tech</title>

      <meta key="og:title" property="og:title" content="Contact Us | The Hague Tech" />
      <meta key="og:image" property="og:image" content="https://www.thehaguetech.com/static/pages/contact/meta.jpg" />
      <meta key="og:description" property="og:description" content="Find out how to contact us with your questions, partnership inquiries, and more! Unable to find your answer online? Our team is happy to help and provide you with answers and begin to facilitate your journey with The Hague Tech." />
      <meta key="description" name="description" content="Find out how to contact us with your questions, partnership inquiries, and more! Unable to find your answer online? Our team is happy to help and provide you with answers and begin to facilitate your journey with The Hague Tech." />

    </Head>
    <Navigation />
    <div style={{height: '132px'}} /> 
    <div className="contact-wrapper">
      <SmallCapsTitle>
        Introduction
      </SmallCapsTitle>
      <br />
      <Title size="small">
        Send us a message
      </Title>
      <p style={{
        fontWeight: 'bold',
        background: '#feef00',
        padding: '5px 10px',
        display: 'none'
      }}>
        Thank you for your message! We will contact you soon.
      </p>
      <ContactForm />
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
        margin-top: 4rem;
      }
    `}</style>
  </div>
}

export default Contact;
