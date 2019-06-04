import React, { Component } from 'react';
import Router from 'next/router'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import $ from 'jquery';

// Load components
const Logo = dynamic(() => import('../components/logo.js'));

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showNav: false
    }

    this.TO_interval;

    Router.events.on('routeChangeComplete', (url) => {
      $('body').css('overflow-y', 'unset')
    });
  }
  componentDidMount() {
    this.autoHideNav();
  }
  componentUnMount() {
    clearTimeout(this.TO_interval);
  }
  autoHideNav() {
    /**
     * Header scroll
     * 
     * https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
     */
    var self = this;
    $(function() {

      var didScroll;
      var lastScrollTop = 0;
      var delta = 5;
      var navbarHeight = $('.Navigation').outerHeight();

      // on scroll, let the interval function know the user has scrolled
      $(window).scroll(function(event){
        didScroll = true;
      });

      // run hasScrolled() and reset didScroll status
      self.TO_interval = setInterval(function() {
        if (didScroll) {
          hasScrolled();
          didScroll = false;
        }
      }, 250);

      function hasScrolled() {
        var st = $(window).scrollTop();

        // Don't hide if menu is active
        if($('.Navigation').hasClass('is-active')) {
          return false;
        }

        // If current position > last position AND scrolled past navbar...
        if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('.Navigation').removeClass('nav-down').addClass('nav-up');
        } else {
          // Scroll Up
          $('.Navigation').removeClass('nav-up').addClass('nav-down');
        }
        lastScrollTop = st;
      }
    })
  }
  clickToggleButton() {
    if(window.innerWidth < 780) {
      $('body').css('overflow-y', this.state.showNav ? 'unset' : 'hidden')
    }
    this.setState({
      showNav: ! this.state.showNav
    })
  }
  toggleDesktopNav() {
    // Only work on desktop
    if(window.innerWidth < 780) {
      return;
    }
    this.clickToggleButton(); 
  }
  render() {
    return <header className={'Navigation' + (this.state.showNav ? ' is-active' : '')}>
      <Link href="/index">
        <div style={{cursor: 'pointer', display: 'inline-block'}}>
          <Logo />
        </div>
      </Link>
      <nav className="main-nav">
        <ul>
          <li>
            <a onClick={() => this.toggleDesktopNav()}>
              How
            </a>
            <nav>
              <ul>
                <li className="icon icon-international-business">
                  <a>International Business</a>
                </li>
                <li className="icon icon-cocreation">
                  <a>Co-creation</a>
                </li>
                <li className="icon icon-community">
                  <a>Community</a>
                </li>
                <li className="icon icon-events">
                  <Link href="/events">
                    <a>Events & Labs</a>
                  </Link>
                </li>
                <li className="icon icon-coworking">
                  <a>Co-working</a>
                </li>
              </ul>
            </nav>
          </li>
          <li>
            <a>
              What
            </a>
          </li>
          <li>
            <a>
              Act
            </a>
          </li>
          <li>
            <a>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="toggle-nav"
        onClick={() => this.clickToggleButton()}
        >
        <span className={'icon-' + (this.state.showNav ? 'close' : 'hamburger')}></span>
      </div>
      <style jsx>{`
        .Navigation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          padding: 1rem 18px;
          z-index: 10;
        }
        .Navigation,
        .Navigation .toggle-nav {
          transition: top 0.2s ease-in-out;
        }
        .Navigation.nav-up,
        .Navigation.nav-up .toggle-nav {
          transition: top 0.4s ease-in-out;
          top: -107px;
        }
        .Navigation.is-active,
        .Navigation.is-active .toggle-nav {
          transition: top 0s;
        }
        @media (min-width: 780px) {
          .Navigation {
            padding: 24px 32px;
            display: flex;
            justify-content: flex-start;
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
        @media(min-width: 780px) {
          .main-nav {
            display: flex;
            margin-top: 0;
            margin-left: 264px;
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
          min-height: 16rem;
        }
        @media(min-width: 780px) {
          ul {
            width: auto;
            height: auto;
            min-height: auto;
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
        .main-nav > ul > li {
          width: 5rem;
          position: relative;
          z-index: 1;
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
        @media(min-width: 780px) {
          nav a {
            margin-bottom: 0;
            text-align: center;
          }
        }

        nav > ul > li {
          position: relative;
          left: -1rem;
          width: 100vw;
        }
        @media(min-width: 780px) {
          nav > ul > li {
            left: 0;
          }
        }

        @media(min-width: 780px) {
          header > nav > ul > li {
            position: static;
            left: 0;
            width: auto;
  
            display: flex;
            justify-content: center;
            flex-direction: column;
            top: 10px;
            margin: 0 1rem;
            height: 71px;
          }
        }

        nav a:hover,
        nav a:focus,
        nav a:active {
          background: #feef00;
        }
        nav nav {
          position: absolute;
          top: 0;
          left: 0;
          padding-left: 100px;
          z-index: -1;
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
          width: 18px;
        }
        .icon-close,
        .icon-hamburger {
          width: 18px;
          height: 18px;
          display: block;
          background: center center no-repeat;
          background-size: contain;
        }
        .icon-hamburger {
          background-size: 18px;
          background-image: url(/static/components/navigation/hamburger.svg);
        }
        .is-active {
          display: block;
          height: 100vh;
        }
        .is-active .toggle-nav {
          font-size: 3rem;
        }
        @media(min-width: 780px) {
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
          ul ul {
            border-left: none;
            display: block;
          }
          nav nav {
            display: none;
            position: absolute;
            left: 0;
            top: 4rem;
            padding-left: 0;
          }
          .is-active {
            height: auto;
            min-height: 400px;
            display: flex;
          }
          .is-active nav nav {
            display: flex;
          }
          nav nav li {
            margin: 0.5rem 0;
          }
          .is-active nav nav a {
            white-space: nowrap;
            text-align: left;
            display: inline-block;
          }
        }

        .Navigation .icon {
          background: 1rem 50% no-repeat url('https://assets.materialup.com/uploads/30080ad4-97ee-47f7-a98a-c0d2e8d704b2/preview');
          background-size: 40px;
          padding-left: calc(40px + 1rem);
        }

      `}</style>
    </header>
  }
}

export default Navigation;
