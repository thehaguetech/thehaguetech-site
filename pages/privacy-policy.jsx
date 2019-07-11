import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const Pricing = dynamic(() => import('../components/pricing.jsx'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));
const Footer = dynamic(() => import('../components/footer.js'));

function Community() {
  return <div className="root">
    <Head>
      <title>Privacy policy - The Hague Tech</title>
    </Head>

    <Navigation />

    <div className="content-wrapper">
      <Title size="large">
        Your Privacy
      </Title>

      <br />

      <Title size="small">
        What information do we collect?
      </Title>

      <p>
        We collect information from you when you fill out a form on the site by entering your: name, e-mail address or phone number. You may, however, visit our site anonymously.
      </p>

      <p>
        If you sign up for the newsletter, your information (name, email address) is shared with MailChimp.
      </p>

      <p>
        Google, as a third party vendor, uses cookies so that we can analyse the way visitors use our site.
      </p>

      <p>
        HotJar, as a third party vendor, doesn't store cookies, though they get your IP address. HotJar is used for collecting feedback (the widget in the right bottom of the site).
      </p>

      <p>
        If you don't want third party vendors tracking you, install <a href="https://www.eff.org/privacybadger" target="_blank">Privacy Badger</a> (Chrome/Firefox/Opera). Or install uBlock Origin for <a href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm" target="_blank">Chrome</a> or <a href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/" target="_blank">Firefox</a>. It will block trackers for you, so you don't have to.
      </p>

      <br /><br />

      <Title size="small">
        What do we use your information for?
      </Title>

      <p>
        Any of the information we collect from you may be used in one of the following ways:
      </p>

      <ul>
        <li>
          To personalize your experience: (your information helps us to better respond to your individual needs)
        </li>
        <li>
          To improve our website: (we continually strive to improve our website offerings based on the information and feedback we receive from you)
        </li>
        <li>
          To improve customer service: (your information helps us to more effectively respond to your customer service requests and support needs)
        </li>
      </ul>

      <br /><br />

      <Title size="small">
        How do we protect your information?
      </Title>

      <p>
        Form information is sent via email, to Outlook 365. Microsoft secures these emails, thus your information.
      </p>

      <br /><br />

      <Title size="small">
        Do we use cookies?
      </Title>

      <p>
        Yes (Cookies are small files that a site or its service provider transfers to your computers hard drive through your web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information.
      </p>

      <p>
        We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.
      </p>

      <br /><br />

      <Title size="small">
        Do we disclose any information to outside parties?
      </Title>
  
      <p>
        We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
      </p>

      <br /><br />

      <Title size="small">
        Online Privacy Policy Only
      </Title>

      <p>
        This online privacy policy applies only to information collected through our website and not to information collected offline.
      </p>

      <br /><br />

      <Title size="small">
        Your Consent
      </Title>

  ​    <p>
        By using our site, you consent to our Online Privacy Policy.
      </p>

      <br /><br />

      <Title size="small">
        Changes to our Privacy Policy
      </Title>

      <p>
        If we decide to change our privacy policy, we will post those changes on this page.
      </p>

      <br /><br />

      <Title size="small">
        Contacting Us
      </Title>

      <p>
        If there are any questions regarding this privacy policy, please <Link href="/contact"><a>contact us</a></Link>.
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

export default Community;
