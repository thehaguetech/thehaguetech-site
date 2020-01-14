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

function CodeOfConduct() {
  return <div className="root">
    <Head>
      <title>Code of Conduct | The Hague Tech</title>
    </Head>
    <Navigation />

    <div className="content-wrapper">
      <Title size="large">
        Who let the people in?
      </Title>

      <br />

      <Title size="small">
        Why a code of conduct?
      </Title>

      <p>
        At The Hague Tech we aim to have a safe and inclusive community. Our code of conduct allows us to achieve this together. It sets forth how we interact positively with each other, how we make use of our facilities, and how we foster a positive community. 
      </p>

      <p>
        Our code of conduct helps us achieve this. It outlines how we interact with each other, how we make use of the facilities, and what you can do to have a positive influence on the community.
      </p>

      <p>
        The Hague Tech is committed to providing a harassment-free experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, or religious affiliation. We do not tolerate harassment in any form. Event participants violating these rules may face consequences including, but not limited to, expulsion from the facilities without a refund. By joining our community or attending an event, you are agreeing to abide by these guidelines. We expect our community to help us realize a safe and positive experience for everyone.
      </p>

      <br /><br />

      <Title size="small">
        Live like at home, not a hotel
      </Title>

      <p>
        Our office is a shared space where we all want to feel at home and welcome. This requires us to take particular care of the cleanliness and organization of the space. If you decide to pick up, use, or modify anything within the space please leave it as you found it or in better shape. Treat our shared space with care. And for individuals with enclosed space, treat your space with care as to keep a warm and welcoming environment for all. 
      </p>

      <p>
        It is everyone’s responsibility to clean their own dishes, refill the coffee machine and keep it clean, tidy their areas and provide and clean working environment for everyone. 
      </p>

      <br /><br />

      <Title size="small">
        No Poaching
      </Title>

      <p>
        Great talent is all around us and is what makes our community what it is. Therefore, we must take measures to protect the companies and individuals within our space. Poaching - approaching team members from other The Hague Tech resident or member companies with job offers with an intent to recruit - is not permitted. If team members approach your company with an application, treat it as you would any other, with respect and confidentiality. Poaching is seperate from collaboration, as we encourage synergy building and collaboration efforts between companies and individuals. This should always be done with the intent to grow both parties rather than taking advantage of one another. 
      </p>

      <br /><br />

      <Title size="small">
        Ask for Help
      </Title>

      <p>
        The community is here to help you. Whatever the struggle, business or personal, it is important to reach out to your fellow community members for help and advice. To ask for help, either use our dedicated WhatsApp groups, or contact our communications team at <a href="mailto:communication@thehaguetech.com">communication@thehaguetech.com</a> so they can pass along your message in a helpful way. 
      </p>

      <br /><br />

      <Title size="small">
        Follow Guidelines
      </Title>

      <p>
        There will be multiple guidelines posted around the community, including for the coffee machine, eating area, pool table, and more. All guidelines must be followed as written. Any additional guidelines that you believe should be posted and included should be sent in a written proposal to <a href="mailto:facilities@thehaguetech.com">facilities@thehaguetech.com</a>.
      </p>

      <br /><br />

      <Title size="small">
        No Harassment
      </Title>

      <p>
        The Hague Tech has a zero tolerance policy towards harassment of any kind. 
      </p>

      <ol type="a">
        <li>
          Harassment includes but is not limited to 
          <ol type="i">
            <li>Verbal comments that reinforce discrimination based on gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion.</li>
            <li>Sexually-charged jokes, statements, or comments.</li>
            <li>Creation or display of sexual images in public spaces.</li>
            <li>Deliberate intimidation, stalking, or unwanted following.</li>
            <li>Harassing photography or video/audio recording.</li>
            <li>Sustained disruption of talks or other events.</li>
            <li>Inappropriate physical contact.</li>
            <li>Invasion of personal space.</li>
            <li>Unwelcome sexual attention.</li>
            <li>Advocating for, or encouraging, any of the above behavior.</li>
          </ol>
        </li>
        <li>
          Reporting
          <ol type="i">
            <li>If someone makes you or anyone else feel unsafe or unwelcome, we encourage you to report it as soon as possible. All reports may be submitted personally or anonymously to communication@thehaguetech.com. All claims are taken seriously and we promise to fully investigate and act on information we receive through reporting.</li>
          </ol>
        </li>
        <li>
          Enforcement
          <ol type="i">
            <li>If a community member engages in harassing activities, each individual community member has the right to take action and request that the harasser immediately leaves the premises. </li>
            <li>If a report is filed against a community member, The Hague Tech management team will review the case in order to see if it does constitute harassment. If the community member filed against is found in violation of the harassment policy, they are expelled from the community and their contracts terminated at the end of the current month. </li>
          </ol>
        </li>
        <li>
          Mediation
          <ol type="i">
            <li>If you feel you have been falsely or unfairly accused of violating this Code of Conduct, you should notify anyone from the management team of The Hague Tech. </li>
            <li>If the accuser is open to mediation, a mediation session will be help between the accuser, the accused, a THT team member and a community member. </li>
            <li>If the accuser is not open to mediation, each case must be presented to a panel of a THT team member and two community members. All decisions from this panel must be unanimous and are final. </li>
          </ol>
        </li>
      </ol>

      <br /><br />

      <Title size="small">
        Have Fun!
      </Title>
  
      <p>
        The Hague Tech is a lively and welcoming place filled with talented and innovative people. Our community is the key to our success and it is in everyone’s interest to make the office the best possible environment to work in each and every day. Do you have an idea for a great initiative? Do you want to share your knowledge? Do you want to have some celebratory drinks? The Hague Tech is your space to make as fun and exciting as possible! 
      </p>

    </div>
    <div>
      <NewsletterSubscribe />
    </div>
    <Footer />
    <style jsx global>{`
      .content-wrapper {
        padding: 140px 12px;
        width: 800px;
        max-width: 100%;
        margin: 0 auto;
      }
    `}</style>
  </div>
}

export default CodeOfConduct;
