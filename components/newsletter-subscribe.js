import { Component } from 'react';
import dynamic from 'next/dynamic';

// Load components
const Title = dynamic(() => import('../components/title.js'));
const Logo = dynamic(() => import('../components/logo.js'));
const Button = dynamic(() => import('../components/button.js'));
const Text = dynamic(() => import('../components/text.js'));

class NewsletterSubscribe extends Component {
  render() {
    return <div className="NewsletterSubscribe">
      <div className="flex max-width">
        <div className="logo-wrapper">
          <Logo color="white" />
        </div>
        <div>
          <Title color="white" style={{
            fontSize: '28px',
            lineHeight: '32px'
          }}>
            Subscribe to our newsletter
          </Title>
          <div style={{padding: '1rem 0'}}>
            <Text color="white">
              Stay up to date with the latest news, events, courses and workshops.
            </Text>
          </div>
          <Button href="/newsletter" style={{
            margin: '1rem 0 0 0',
            textTransform: 'lowercase',
            lineHeight: '3.5rem',
            background: 'transparent',
            border: 'solid #fff000 1px',
            color: '#fff000',
          }}>
            Subscribe
          </Button>
        </div>
      </div>
      <style jsx>{`
        .NewsletterSubscribe {
          padding: 3rem 1rem;
          background-color: #071124;
          color: #fff;
          font-size: 1rem;
        }
        @media (min-width: 480px) {
          .NewsletterSubscribe {
            padding: 10rem 0;
          }
        }
        .logo-wrapper {
          width: 7rem;
          margin: 3rem 0 33px 0;
        }
        .flex {
          display: block;
        }
        @media(min-width: 480px) {
          .max-width {
            max-width: 40rem;
            margin: 0 auto;
          }
          .flex {
            display: flex;
            justify-content: space-between;
          }
          .logo-wrapper {
            width: auto;
            margin: 0 120px 0 0;
          }
        }
      `}</style>
    </div>
  }
}

export default NewsletterSubscribe;
