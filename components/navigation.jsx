import React, { Component } from 'react';
import Router from 'next/router'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import * as R from 'ramda';
import $ from 'jquery';

// Load components
const Logo = dynamic(() => import('../components/logo.js'));
const NextEvent = dynamic(() => import('../components/next-event.js'));

class Navigation extends Component {
  constructor(props) {
    super(props)

    const isClient = typeof document !== 'undefined'

    this.state = {
      showNav: false,
      path: isClient && Router.pathname
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
        self.setState({ activePrimaryNav: null, showNav: false })
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
  hoverPrimaryNavLink(name) {
    // On mobile: Do nothing
    if(window.innerWidth < 780) return;
    this.setState({ activePrimaryNav: name, showNav: true })
  }
  render() {
    let navigation = [
      {
        title: 'What We Do',
        items: [{
          title: 'Community',
          href: '/community',
          image: '/static/components/carousel/tht-icon-community.svg'
        }, {
          title: 'Co-working',
          href: '/coworking',
          image: '/static/components/carousel/tht-icon-coworking.svg'
        }, {
          title: 'Events & Labs',
          href: '/meetings-events-labs',
          image: '/static/components/carousel/tht-icon-events.svg'
        }, {
          title: 'International Business',
          href: '/international-business',
          image: '/static/components/carousel/tht-icon-business.svg'
        }, {
          title: 'Co-creation',
          href: '/co-creation',
          image: '/static/components/carousel/tht-icon-cocreate.svg'
        }]
      },
      {
        title: 'What is Happening',
        items: [{
          title: 'Events',
          href: '/events',
          image: '/static/components/navigation/tht-icon-events.svg'///tht-icon-stories.svg
        }, {
          title: 'Stories',
          href: '/stories',
          image: '/static/components/navigation/tht-icon-stories.svg'
        }]
      },
      {
        title: 'Pricing',
        href: '/pricing'
      },
      {
        title: 'Contact',
        href: '/contact'
      }
    ]
    return <header className={'Navigation' + (this.state.showNav ? ' is-active' : '')}>
      <div className="max-width">
        <Link prefetch href="/">
          <div style={{cursor: 'pointer', height: '72px', display: 'inline-block'}} title="Back to home">
            <Logo style={{
              zIndex: 1
            }} />
          </div>
        </Link>
        <div className="white-background main only-on-desktop"></div>
        <div className="white-background sub only-on-desktop"></div>
        <div className="black-background only-on-desktop" onClick={() => this.setState({ showNav: false, activePrimaryNav: null })}></div>
        <nav className="main-nav">
          <ul>
            {R.map((item) => {
              return <li key={item.title} className={'primary-nav-item' + (this.state.activePrimaryNav == item.title ? ' is-active' : '')}>
                {item.href
                  ? <Link prefetch href={item.href}>
                      <a
                        onClick={() => this.setState({ showNav: false, activePrimaryNav: item.title })}
                        className={'primary-nav-link' + (this.state.path == item.href ? ' is-active' : '')}
                        >
                        {item.title}
                      </a>
                    </Link>
                  : <a
                      onClick={() => this.clickPrimaryNavLink(item.title)}
                      onMouseOver={() => this.hoverPrimaryNavLink(item.title)}
                      className="primary-nav-link">
                      {item.title}
                    </a>
                }
                <nav className={'secundary-nav' + (item.items ? ' has-subnav' : '')}>
                  <ul>
                    {item.items && R.map((item) => {
                      return <li key={item.title} className="icon" style={{backgroundImage: `url(${item.image})`}}>
                        <Link prefetch href={item.href}>
                          <a className={'secundary-nav-link' + (this.state.path == item.href ? ' is-active' : '')}>{item.title}</a>
                        </Link>
                      </li>
                    }, item.items)}
                  </ul>
                  <NextEvent />
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
      </div>
      <style jsx>{`
        .Navigation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1rem 18px;
          z-index: 10;
        }
        @media(max-width: 1060px) {
          .Navigation {
            background: rgba(255,255,255,0.95);
          }
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
        @media (min-width: 1060px) {
          .Navigation {
            padding: 0;
          }
          .max-width {
            width: 1327px;
            max-width: 100%;
            margin: 0 auto;
            padding: 18px 24px;
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
          position: relative;
          z-index: 2;
        }
        .secundary-nav {
          position: static;
          z-index: 1;
        }
        .main-nav > ul {
          position: relative;
        }
        @media(min-width: 1060px) {
          .main-nav {
            display: flex;
            margin-top: 0;
            margin-left: 238px;
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
        @media(min-width: 1060px) {
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
          white-space: nowrap;
        }
        @media(min-width: 1060px) {
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
        @media(min-width: 1060px) {
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
        @media(min-width: 1060px) {
          .primary-nav-item {
            left: 0;
          }
        }

        @media(min-width: 1060px) {
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
          .secundary-nav > ul {
            min-width: 284px;
          }
        }

        nav a:hover,
        nav a:focus,
        nav a:active,
        .primary-nav-item.is-active > a,
        .secundary-nav-link.is-active {
          background: #feef00;
        }
        @media(min-width: 1060px) {
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
        .primary-nav-item.is-active > nav.has-subnav {
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
          right: 0;
          height: 5rem;
          z-index: 1;
          padding: 0 18px;
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
        @media(min-width: 1060px) {
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
          header .white-background.main {
            background: rgba(255,255,255,0.95);
            width: 100%;
            height: 110px;
            position: absolute;
            width: 100%;
            left: 0;
            top: 0;
          }
          header.is-active .white-background.main {
          }
          header .white-background.sub {
            transition: background .44s .2s cubic-bezier(0.52, 0.16, 0.24, 1), max-height .56s cubic-bezier(0.52, 0.16, 0.24, 1);
            max-height: 0;
          }
          header.is-active .white-background.sub {
            transition: background .36s cubic-bezier(0.32, 0.08, 0.24, 1), max-height .56s cubic-bezier(0.52, 0.16, 0.24, 1);
            position: absolute;
            height: 24rem;
            max-height: 405px;
            background: #fff;
            width: 100%;
            left: 0;
            top: 110px;
          }
          @keyframes fadein {
              from { opacity: 0; }
              to   { opacity: 1; }
          }
          @keyframes fadeout {
              from { opacity: 1; }
              to   { opacity: 0; }
          }

          header .black-background {
            animation: fadeout 0.4s;
          }
          header.is-active .black-background {
            animation: fadein 0.4s;
            opacity: 1;
            background: rgba(0,0,0,0.8);
            height: 100%;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: -1;
          }
          .secundary-nav {
            transition: opacity 1s 0s;
            opacity: 0;
          }
          header.is-active .secundary-nav {
            transition: opacity .36s .56s;
            opacity: 1;
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

        @media(min-width: 1060px) {
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
