import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import * as R from 'ramda';

// Load components
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const TextAndImage = dynamic(() => import('../components/text-and-image.js'));

class PricingBlock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false
    }
  }
  render() {
    const mapIndexed = R.addIndex(R.map);
    const data = this.props.data;
    return <div className="PricingBlock">
      <div className="heading">
        <b>Membership</b>
        <span className="extra-benefit">
          {data.extraBenefit}
        </span>
      </div>
      <div className="pricing-wrapper">
        <div className="price-in-euros">
          <sup>&euro;</sup> {data.price}
        </div>
        <small>
          per month excl. 21% vat
        </small>
      </div>
      <hr />
      <h1>
        {data.title}
      </h1>
      <div className={'features' + (this.state.isActive ? ' is-active' : '')}>
        {mapIndexed((feature, idx) => {
          return <div key={idx} className="feature">
            {feature}
            {idx === 0 &&
              <div className={'arrow' + (this.state.isActive ? ' down' : '')}
                   onClick={() => this.setState({ isActive: ! this.state.isActive })}
                   />
            }
          </div>
        }, data.features)}
      </div>
      <Link href="/contact">
        <a className="button">
          sign up
        </a>
      </Link>
      <div className="tagline">

      </div>
      <style jsx>{`
        .PricingBlock {
          padding: 24px 16px;
          margin: 32px 12px;
          box-shadow: 0 2px 13px rgba(0, 0, 0, 0.2);
          background-color: #ffffff;
        }
        .heading b {
          display: block;
          min-height: 48px;
          background-color: #071124;
          line-height: 48px;
          color: #ffffff;
          font-family: "Maison Neue", sans-serif;
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 1.67px;
          text-transform: uppercase;
          text-align: center;
        }
        .extra-benefit {
          height: 24px;
          display: block;
          color: #0f2247;
          margin: 8px 0;
          text-align: center;
          font-family: "Maison Neue", sans-serif;
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 1.67px;
          line-height: 24px;
          text-transform: uppercase;
        }
        .pricing-wrapper {
          margin: 37px 0 24px 0;
          text-align: center;
        }
        .price-in-euros {
          display: inline-block;
          margin: 0 auto;
          color: #1126a9;
          font-family: "Maison Neue", sans-serif;
          font-size: 60px;
          font-weight: 300;
          text-transform: uppercase;
          position: relative;
        }
        .price-in-euros sup {
          position: absolute;
          left: -20px;
          font-size: 24px;
          font-weight: 300;
          top: 12px;
        }
        .pricing-wrapper small {
          display: block;
          color: #071124;
          font-family: "Maison Neue", sans-serif;
          font-size: 15px;
          font-weight: 300;
        }
        hr {
          border: none;
          height: 1px;
          background: #ccc;
        }
        h1 {
          color: #0f2247;
          font-family: "Maison Neue", sans-serif;
          font-size: 24px;
          font-weight: 500;
          line-height: 32px;
          text-align: center;
        }
        .features {
          color: #1126a9;
          font-family: "Maison Neue", sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 24px;
          border-bottom: solid #ccc 1px;
          max-height: 50px;
          overflow: hidden;
          transition: max-height 1.2s;
        }
        .features.is-active {
          max-height: 1200px;
        }
        @media(min-width: 480px) {
          .features {
            max-height: auto;
          }
        }
        .feature {
          border-top: solid #ccc 1px;
          padding: 12px;
          position: relative;
        }
        .button {
          display: block;
          text-decoration: none;
          text-align: center;
          margin: 40px 0 8px 0;
          height: 48px;
          line-height: 48px;
          background-color: #feef00;

          color: #0f2247;
          font-family: "Open Sans", sans-serif;
          font-size: 18px;
        }

        .arrow {
          transition: transform 0.4s 0.2s;
          transform: rotate(180deg);
          background: top left no-repeat url('/static/components/pricing/arrow-top.svg');
          width: 16px;
          height: 9px;
          position: absolute;
          top: 20px;
          right: 12px;
          cursor: pointer;
        }
        .arrow.down {
          transition: transform 0.4s;
          transform: rotate(0);
        }
        @media(min-width: 480px) {
          .arrow {
            display: none;
          }
        }
        .tagline {
          color: #1126a9;
          font-family: "Maison Neue", sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 24px;
        }
      `}</style>
    </div>
  }
}

function Pricing() {
  const memberships = [
    {
      name: 'membership',
      extraBenefit: '',
      price: 55,
      title: 'Become part of the community of The Hague Tech',
      features: [
        'Super-fast wifi',
        'Unlimited coffee / tea',
        'Private events',
        'Use massage chair',
        'Ping-pong and foosball',
        'Access Monday to Friday',
        'Contract period 1 month'
      ],
      tagline: 'A great way to access the power of our community.'
    },
    {
      name: 'membership',
      extraBenefit: '+ flex co-working',
      price: 180,
      title: 'Flexible workplace starting from 1 day a week.',
      features: [
        'Super-fast wifi',
        'Unlimited coffee / tea',
        'Private events',
        'Use massage chair',
        'Ping-pong and foosball',
        'Access Monday to Friday',
        'Contract period 1 month',
        'Use of meeting space 1 hour a month',
        'Use desks in co-working space',
        'Locker (add. € 15 p/m)',
        'Postal address (add. € 25 p/m)',
      ],
      tagline: 'An incredible way to work in our co-working space and with our community.'
    },
    {
      name: 'membership',
      extraBenefit: '+ flex dedicated',
      price: 255,
      title: 'Fixed workplace in co-working space.',
      features: [
        'Super-fast wifi',
        'Unlimited coffee / tea',
        'Private events',
        'Use massage chair',
        'Ping-pong and foosball',
        'Access Monday to Friday',
        'Contract period 1 month',
        'Use of meeting space 1 hour a month',
        'Use desks in co-working space',
        'Locker (add. € 15 p/m)',
        'Postal address (add. € 25 p/m)',
        'Dedicated workplace with desk',
      ],
      tagline: 'The perfect way to set up shop right in the heart of our community.'
    },
    {
      name: 'membership',
      extraBenefit: '+ office',
      price: 525,
      title: 'Use of workplace in enclosed space.',
      features: [
        'Super-fast wifi',
        'Unlimited coffee / tea',
        'Private events',
        'Use massage chair',
        'Ping-pong and foosball',
        'Access Monday to Friday',
        'Contract period 1 month',
        'Use of meeting space 1 hour a month',
        'Use desks in co-working space',
        'Locker (add. € 15 p/m)',
        'Postal address (add. € 25 p/m)',
        'Dedicated workplace with desk',
        'Enclosed, lockable office',
      ],
      tagline: 'The best way to make our space yours and join our community.'
    }
  ]
  return <div className="Pricing">
    <IntroText>
      The Hague Tech offers the space you need right now, and in the future. Our dynamic building can fulfill all your needs.
    </IntroText>
    {R.map((membership) => <PricingBlock key={membership.name} data={membership} />, memberships)}
  </div>
}

export default Pricing;
