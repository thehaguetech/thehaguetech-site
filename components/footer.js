import dynamic from 'next/dynamic';
import { Component } from 'react';

// Load components
// const Logo = dynamic(() => import('../components/logo.js'));

class Footer extends Component {
  render() {
    return <div className="Footer">
      <div className="max-width flex">
        <nav className="social-icons">
          <a href="https://twitter.com/lifenautjoe/status/1126539431601672193" target="_blank" title="">fb</a>
          <a href="https://www.twitter.com/The_Hague_Tech" target="_blank">twt</a>
          <a href="https://www.linkedin.com/company/the-hague-tech/" target="_blank">lin</a>
        </nav>
        <nav className="footer-nav">
          <a href="">Contact</a>
          <a href="">FAQ</a>
          <a href="">Jobs</a>
          <a href="">Privacy Policy</a>
        </nav>
        <div />
      </div>
      <style jsx>{`
        .Footer {
          padding: 3rem 1rem;
          background-color: #071124;
          color: #fff;
          font-size: 1rem;
        }
        @media(min-width: 480px) {
          .Footer {
            background-color: #000000;
            padding: 1rem 1rem;
          }
          .flex {
            display: flex;
            justify-content: space-between;
          }
          .flex > * {
            flex: 1;
          }
          .flex > *:first-child,
          .flex > *:last-child {
            width: 130px;
            flex: none;
          }
        }
        .social-icons {
          justify-content: space-around;
          display: flex;
          max-width: 8rem;
        }
        @media(min-width: 480px) {
          .footer-nav {
            display: flex;
            justify-content: space-around;
            padding: 0 10%;
            margin: 0 auto;
          }
        }
        nav a {
          font-family: "Maison Neue", sans-serif;
          display: block;
          text-decoration: none;
          color: #fff;
          margin: 2rem 0;
        }
        .max-width {
          margin: 0 auto;
          width: 80%;
          max-width: 100%;
        }
      `}</style>
    </div>
  }
}

export default Footer;
