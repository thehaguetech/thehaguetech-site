import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Component } from 'react';

class Footer extends Component {
  render() {
    return <div className="Footer">
      <div className="max-width flex">
        <nav className="social-icons">
          <a href="https://www.facebook.com/thehaguetech/" target="_blank" title="">
            <img src="/static/components/footer/facebook-icon.svg" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com/The_Hague_Tech" target="_blank">
            <img src="/static/components/footer/twitter-icon.svg" alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/company/the-hague-tech/" target="_blank">
            <img src="/static/components/footer/linkedin-icon.svg" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/thehaguetech/" target="_blank">
            <img src="/static/components/footer/instagram-icon.png" alt="Instagram" />
          </a>
        </nav>
        <nav className="footer-nav">
          <Link prefetch href="/contact">
            <a className="nav-link">Contact</a>
          </Link>
          <Link href="https://github.com/thehaguetech/thehaguetech-site#thehaguetech-site">
            <a className="nav-link" target="_blank">GitHub</a>
          </Link>
        </nav>
      </div>
      <style jsx>{`
        .Footer {
          padding: 3rem 1rem;
          background-color: #000;
          color: #fff;
          font-size: 17px;
          line-height: 48px;
        }
        .flex {
          display: block;
        }
        .social-icons {
          justify-content: space-between;
        }
        .social-icons img {
          width: 18px;
          height: 18px;
        }
        @media(min-width: 480px) {
          .Footer {
            background-color: #000;
            padding: 1rem 1rem;
          }
          .flex {
            display: flex;
            justify-content: space-between;
          }
          .flex > * {
            flex: 1;
          }
          .flex > *:last-child {
            width: 130px;
            flex: none;
          }
        }
        .social-icons {
          display: flex;
          max-width: 12rem;
        }
        .social-icons a {
          padding: 0 12px;
        }
        .social-icons a:hover {
          opacity: 0.8;
        }
        nav a {
          font-family: "Maison Neue", sans-serif;
          display: block;
          text-decoration: none;
          color: #fff;
          margin: 0.5rem 0;
        }
        @media(min-width: 480px) {
          .footer-nav {
            display: flex;
            justify-content: space-around;
            padding: 0 0;
            margin: 0 auto;
            width: 260px !important;
          }
          .social-icons {
            justify-content: space-around;
          }
          .max-width {
            margin: 0 auto;
            width: 80%;
            max-width: 100%;
          }
        }
        .nav-link {
        }
        .nav-link:hover {
        }
      `}</style>
    </div>
  }
}

export default Footer;
