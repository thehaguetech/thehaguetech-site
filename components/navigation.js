import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Load components
const Logo = dynamic(() => import('../components/logo.js'));

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showNav: false
    }
  }
  render() {
    return <div className={'Navigation' + (this.state.showNav ? ' is-active' : '')}>
      <Link href="/index">
        <div style={{cursor: 'pointer'}}>
          <Logo />
        </div>
      </Link>
      <nav className="main-nav">
        <ul>
          <li>
            <Link href="/events">
              <a>
                How
              </a>
            </Link>
            <nav>
              <ul>
                <li className="icon-international-business">
                  <a>International Business</a>
                </li>
                <li className="icon-cocreation">
                  <a>Co-creation</a>
                </li>
                <li className="icon-community">
                  <a>Community</a>
                </li>
                <li className="icon-events">
                  <a>Events & Labs</a>
                </li>
                <li className="icon-coworking">
                  <a>Co-working</a>
                </li>
              </ul>
            </nav>
          </li>
          <li>
            <Link href="/">
              <a>What</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Act</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className="toggle-nav"
        onClick={() => this.setState({ showNav: ! this.state.showNav })}
        >
        <span>
          {this.state.showNav
            ? '×'
            : '☰'
          }
        </span>
      </div>
      <style jsx>{`
        .Navigation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          padding: 1rem 1rem;

          z-index: 10;
        }
        @media (min-width: 480px) {
          .Navigation {
            padding: 24px 32px;
            display: flex;
            justify-content: space-between;
          }
        }

        a {
          cursor: pointer;
          text-decoration: none;
        }

        .logo {
          width: 5rem;
          height: 5rem;
          display: block;
        }

        /*
          Navigation
        */
        .main-nav {
          display: none;
          padding-top: 3rem;
          margin-top: 22px;
        }
        @media(min-width: 480px) {
          .main-nav {
            display: flex;
            margin-top: 0;
            padding-top: 0;
          }
        }
        .is-active .main-nav {
          display: block;
        }
        ul, li {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        ul {
          width: 5rem;
          height: 16rem;
        }
        @media(min-width: 480px) {
          ul {
            width: auto;
            height: auto;
          }
        }
        li {
          position: relative;
          display: block;
        }
        ul ul {
          border-left: solid #0F2247 1px;
          padding-left: 1rem; 
          width: auto;
          height: auto;
        }
        nav a {
          line-height: 44px;
          color: #0F2247;
          font-family: "Maison Neue", sans-serif;
          font-size: 1rem;
          font-weight: 300;
          line-height: 1rem;
          display: block;
          position: relative;
          padding: 0.8rem 1rem;
          margin-bottom: 1rem;
        }
        @media(min-width: 480px) {
          nav a {
            margin-bottom: 0;
          }
        }

        nav > ul > li {
          position: relative;
          left: -1rem;
          width: 100vw;
        }

        @media(min-width: 480px) {
          nav > ul > li {
            position: static;
            left: 0;
            width: auto;
  
            display: flex;
            justify-content: center;
            flex-direction: column;
            top: 10px;
            margin: 0 1rem;
          }
        }

        nav a:hover,
        nav a:focus {
          background: #feef00;
        }
        nav nav {
          position: absolute;
          top: 0;
          left: 0;
          padding-left: 100px;
        }

        /* Toggle Nav */
        .toggle-nav {
          cursor: pointer;
          font-family: "Maison Neue", sans-serif;
          font-size: 2rem;
          display: flex;
          justify-content: center;
          flex-direction: column;

          position: fixed;
          top: 10px;
          right: 1rem;
          height: 5rem;
          z-index: 1;
          width: 30px;
        }
        .is-active {
          display: block;
          height: 100vh;
        }
        .is-active .toggle-nav {
          font-size: 3rem;
        }

        @media(min-width: 480px) {
          .toggle-nav {
            display: none;
          }
          nav {
            position: relative;
          }
          ul {
            display: flex;
            justify-content: space-between;
          }
          nav nav {
            display: none;
            position: absolute;
            left: 0;
            top: 4rem;
            padding-left: 0;
          }
        }
      `}</style>
    </div>
  }
}

export default Navigation;
