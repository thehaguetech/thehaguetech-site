import dynamic from 'next/dynamic';
import { Component } from 'react';

// Load components
const Logo = dynamic(() => import('../components/logo.js'));
const Title = dynamic(() => import('../components/title.js'));
const Text = dynamic(() => import('../components/text.js'));

class Footer extends Component {
  render() {
    return <div className="Footer">
      <div style={{margin: '3rem 0'}}>
        <Logo color="white" />
      </div>
      <Title color="white">
        Subscribe to our community
      </Title>
      <div style={{padding: '1rem 0'}}>
        <Text color="white">
          Stay up to date with the latest news, events, courses and workshops.
        </Text>
      </div>
      <nav className="social-icons">
        <a href="https://twitter.com/lifenautjoe/status/1126539431601672193" target="_blank" title="">fb</a>
        <a href="https://www.twitter.com/The_Hague_Tech" target="_blank">twt</a>
        <a href="https://www.linkedin.com/company/the-hague-tech/" target="_blank">lin</a>
      </nav>
      <nav className="footer-nav">
        <a href="">Contact</a>
        <a href="">FAQ</a>
        <a href="">Jobs</a>
        <a href="">Privacy</a>
      </nav>
      <style jsx>{`
        .Footer {
          padding: 3rem 1rem;
          background-color: #071124;
          color: #fff;
          font-size: 1rem;
        }
        .social-icons {
          justify-content: space-between;
          display: flex;
          max-width: 8rem;
        }
        nav a {
          font-family: "Maison Neue", sans-serif;
          display: block;
          text-decoration: none;
          color: #fff;
          margin: 2rem 0;
        }
      `}</style>
    </div>
  }
}

export default Footer;
