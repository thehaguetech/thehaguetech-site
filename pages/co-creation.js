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

function CoCreation() {
  return <div className="root">
    <Head>
      <title>Co-creation - The Hague Tech</title>
    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="Co-creation"
      title="Co-create and innovate with our multi-talented community"
      image="/static/pages/co-creation/page-header.jpg"
      />
    <IntroText>
      The Hague Tech is an inspiring place to collaborate with talented individuals and innovative companies. But we strive to be and do more, to nurture an environment of of co-creation. Co-creation means working together to create prototypes, products, technological solutions and beyond by activating the talent within The Hague Tech. Our community is filled with talented members looking to work together on new and exciting challenges. 
    </IntroText>
    {/*
    Do you have an idea? 
    -Bring your idea and form a team to create a solution.
    Do you have a talent you want to share?
    -Bring your talent and join a team working on innovative solutions. 
    Do you have a problem? 
    -As a corporate or an individual, bring your problem to our community to co-create a viable solution with talented individuals. 
    */}
    <TextAndImage
      image="/static/pages/co-creation/cocreate.jpg"
      category=""
      title=""
      text="The community (our members), our services, physical location, and hyperlocality of our community together form the innovation ecosystem we strive to create. The ecosystem empowers entrepreneurs and individuals to find and share opportunities, form cooperative partnerships, tackle obstacles, create personal contacts, transfer complex ideas and information, and make valuable connections between parties who otherwise would not be able to find each other."
      />
    {/*
    (examples of co-creation) 
    Samsung
    Husense
    DutchBudz
    Soft Landing [Link to the International Business Landing Page]
    */}
    {/*
    Graphic 
    -Co-Creation Workflow

    Bring a Problem -> Find a Project Manager -> Build a Team -> Create a Solution -> Deliver a Solution
    */}
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

export default CoCreation;
