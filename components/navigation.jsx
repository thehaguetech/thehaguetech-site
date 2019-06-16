import React, { Component } from 'react';
import Router from 'next/router'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import * as R from 'ramda';
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

    this.setState({
      activePrimaryNav: window.innerWidth < 780 ? 'How' : null
    })
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
      // On open: Set active nav item on 'How'
      activePrimaryNav: this.state.showNav ? null : 'How',
      // Toggle nav
      showNav: ! this.state.showNav
    })
  }
  clickPrimaryNavLink(name) {
    // Give is-active class, but only if it didn't have it
    if(this.state.activePrimaryNav == name) {
      this.setState({ activePrimaryNav: null, showNav: false })
    } else {
      this.setState({ activePrimaryNav: name, showNav: true })
    }
  }
  render() {
    let navigation = [
      {
        title: 'How',
        items: [{
          title: 'International Business',
          href: '/international-business',
          image: '/static/components/carousel/tht-icon-business.svg'
        }, {
          title: 'Co-creation',
          href: '/co-creation',
          image: '/static/components/carousel/tht-icon-cocreate.svg'
        }, {
          title: 'Community',
          href: '/community',
          image: '/static/components/carousel/tht-icon-community.svg'
        }, {
          title: 'Events & Labs',
          href: '/meetings-events-labs',
          image: '/static/components/carousel/tht-icon-events.svg'
        }, {
          title: 'Co-working',
          href: '/coworking',
          image: '/static/components/carousel/tht-icon-coworking.svg'
        }]
      },
      {
        title: 'What',
        href: '/events'
      },
      {
        title: 'Act',
        href: '/members'
      },
      {
        title: 'Contact',
        href: '/contact'
      }
    ]
    return <header className={'Navigation' + (this.state.showNav ? ' is-active' : '')}>
      <Link prefetch href="/index">
        <div style={{cursor: 'pointer', height: '72px', display: 'inline-block'}} title="Back to home">
          <Logo style={{
            zIndex: 1
          }} />
        </div>
      </Link>
      <div className="white-background main only-on-desktop"></div>
      <div className="white-background sub only-on-desktop"></div>
      <div className="black-background only-on-desktop"></div>
      <nav className="main-nav">
        <ul>
          {R.map((item) => {
            return <li key={item.title} className={'primary-nav-item' + (this.state.activePrimaryNav == item.title ? ' is-active' : '')}>
              {item.href
                ? <Link href={item.href}>
                    <a onClick={() => this.setState({ showNav: false, activePrimaryNav: item.title })} className="primary-nav-link">
                      {item.title}
                    </a>
                  </Link>
                : <a onClick={() => this.clickPrimaryNavLink(item.title)} className="primary-nav-link">
                    {item.title}
                  </a>
              }
              <nav className="secundary-nav">
                <ul>
                  {item.items && R.map((item) => {
                    return <li key={item.title} className="icon" style={{backgroundImage: `url(${item.image})`}}>
                      <Link prefetch href={item.href}>
                        <a className="secundary-nav-link">{item.title}</a>
                      </Link>
                    </li>
                  }, item.items)}
                </ul>
              </nav>
            </li>
          }, navigation)}
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
        @media (min-width: 980px) {
          .Navigation {
            padding: 29px 56px;
            display: flex;
            justify-content: flex-start;
          }
        }

        /*
          Navigation
        */
        .main-nav {
          display: none;
          padding-top: 3rem;
          margin-top: 22px;
          width: 64px;
          margin-left: -32px;
        }
        .secundary-nav {
          position: static;
          z-index: 1;
        }
        .main-nav > ul {
          position: relative;
        }
        @media(min-width: 980px) {
          .main-nav {
            display: flex;
            margin-top: 0;
            margin-left: 269px;
            padding-top: 0;
          }
        }
        header.is-active .main-nav {
          display: block;
        }
        ul, li {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        ul {
          width: 7rem;
          min-height: 16rem;
        }
        @media(min-width: 980px) {
          ul {
            width: 7rem;
            height: auto;
            min-height: auto;
          }
        }
        li {
          display: block;
        }
        ul ul {
          border-left: solid #0F2247 1px;
          padding-left: 1rem; 
          width: auto;
          height: auto;
        }
        .primary-nav-item {
          z-index: 1;
        } 
        nav a {
          text-decoration: none;
          line-height: 44px;
          color: #0F2247;
          font-family: "Maison Neue", sans-serif;
          font-size: 17px;
          line-height: 22px;
          font-weight: 300;
          display: inline-block;
          position: relative;
          margin-left: 12px;
          padding: 10px 17px;
          margin-bottom: 24px;
          min-width: 84px;
          cursor: pointer;
        }
        .primary-nav-link {
          min-width: 96px;
        }
        @media(min-width: 980px) {
          nav a {
            padding: 10px 8px
          }
          nav a.primary-nav-link {
            padding: 10px 0;
            min-width: 0;
            border-bottom: solid transparent 9px;
          }
        }
        nav nav a {
          padding: 10px 17px;
          margin-left: 10px;
          margin-right: 10px;
          display: block;
        }
        @media(min-width: 980px) {
          nav a {
            margin-bottom: 0;
            text-align: center;
          }
          nav nav a {
            padding: 4px 8px;
          }
        }

        .primary-nav-item {
          left: -1rem;
        }
        @media(min-width: 980px) {
          .primary-nav-item {
            left: 0;
          }
        }

        @media(min-width: 980px) {
          .primary-nav-item {
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
        nav a:active,
        .primary-nav-item.is-active > a {
          background: #feef00;
        }
        @media(min-width: 980px) {
          nav .primary-nav-link:hover,
          nav .primary-nav-link:focus,
          nav .primary-nav-link:active,
          nav .primary-nav-item.is-active > a {
            background: transparent;
            border-bottom: solid #feef00 9px;
          }
        }
        nav {
          width: calc(100vw - 20px);
        }
        nav nav {
          display: none;
          width: calc(100vw - 2px);
          position: absolute;
          top: 0;
          left: 0;
          padding-left: 125px;
          z-index: -1;
        }
        .primary-nav-item.is-active > nav {
          display: flex;
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
        .icon-close {
          background-size: 18px;
          background-image: url(/static/components/navigation/close.svg);
        }
        .icon-hamburger {
          background-size: 18px;
          background-image: url(/static/components/navigation/hamburger.svg);
        }
        header.is-active {
          display: block;
          height: 100vh;
          overflow-y: auto;
        }
        @media(min-width: 980px) {
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
            width: unset;
            position: absolute;
            left: 0;
            top: 7rem;
            margin-left: 24px;
            padding-left: 8px;
            padding-left: 0;
          }
          header.is-active {
            height: auto;
            min-height: 524px;
            display: flex;
          }
          header.is-active .white-background.main {
            width: 100%;
            height: 130px;
            position: absolute;
            background: rgba(255,255,255,0.95);
            width: 100%;
            left: 0;
            top: 0;
          }
          header.is-active .white-background.sub {
            position: absolute;
            height: 405px;
            background: #fff;
            width: 100%;
            left: 0;
            bottom: 0;
          }
          @keyframes fadein {
              from { opacity: 0; }
              to   { opacity: 1; }
          }
          @keyframes fadeout {
              from { opacity: 1; }
              to   { opacity: 0; }
          }

          header.is-active .black-background {
            animation: fadein 0.4s;
            background: rgba(0,0,0,0.8);
            height: 100%;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: -1;
          }
          nav nav li {
            margin: 8px 0;
            min-height: 50px;
            display: flex;
            justify-content: center;
            flex-direction: column;
          }
          header.is-active nav nav a {
            white-space: nowrap;
            text-align: left;
            display: inline-block;
          }
        }

        .Navigation .icon {
          background: no-repeat url('https://assets.materialup.com/uploads/30080ad4-97ee-47f7-a98a-c0d2e8d704b2/preview');
          background-size: 40px;
          padding-left: calc(40px + 1rem);
        }
        @media(min-width: 480px) {
          .Navigation .icon:first-child {
            background-size: 34px;
            background-position: 15px 50%;
          }
          .Navigation .icon {
            background-size: 42px;
            background-position: 12px 50%;
          }
        }

        @media(min-width: 980px) {
          .primary-nav-item {
            margin-right: 48px;
            margin-left: 48px;
          }
          .secundary-nav-link {
            width: fit-content;
          }
        }

      `}</style>
    </header>
  }
}

export default Navigation;
