import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import * as R from 'ramda';

// Load components
const IntroText = dynamic(() => import('../components/intro-text.js'));

class PricingBlock extends Component {
  constructor(props) {
    super(props);

    this.handleIsActive = (name = '', isActive = false) => {};

    if (typeof props.handleIsActive !== 'undefined') {
      this.handleIsActive = props.handleIsActive;
    }


    this.state = {
      isActive: false
    };
  }

  render() {
    const mapIndexed = R.addIndex(R.map);
    const data = this.props.data;
    let includeText = '';

    if (!this.state.isActive) {
      includeText = "Find out what's included"
    }

    return <div className={`PricingBlock ${data.name}`}>
      <div className="boxed">
        <div className="triangle">
          <span>Popular</span>103
        </div>
        <div className="heading">
          <Link href="/join-community">
            <b>{data.heading}</b>
          </Link>
          <span className="extra-benefit">
            {data.extraBenefit}
          </span>
        </div>
        <div className="pricing-wrapper">
          <div className="price-in-euros">
            {data.price !== 'VAR' ? (<sup>&euro;</sup>) : <sup></sup>}  {data.price}
          </div>
          <small>{data.priceDescription}</small>
        </div>
        <hr />
        <h1 className="title">
          {data.title}
        </h1>
        <div className={'features' + (this.state.isActive ? ' is-active' : '')}>
          <div className="feature" style={(this.state.isActive) ? {display:'none'} : {}}
               onClick={() => {
                 this.setState({ isActive: ! this.state.isActive });
                 this.handleIsActive(data.name, this.state.isActive);
               }}
          >
            {includeText}
            <div className={'arrow' + (this.state.isActive ? ' down' : '')} />
          </div>
          {mapIndexed((feature, idx) => {
            return <div key={idx} className="feature"
                        onClick={() => {
                          if (idx === 0) {
                            this.setState({ isActive: ! this.state.isActive });
                            this.handleIsActive(data.name, this.state.isActive);
                          }
                        }}
            >
              {feature}
              <div style={(!this.state.isActive || idx !== 0) ? {display:'none'} : {}} className={'arrow' + (this.state.isActive ? ' down' : '')} />
            </div>
          }, data.features)}
        </div>
        <Link href="/join-community">
          <a className="button">
            sign up
          </a>
        </Link>
      </div>
      <div className="tagline">
        {data.tagline}
      </div>
      <style jsx>{`
       @media(min-width: 480px) {
         .PricingBlock {
            width: 306px;
         }
         
         .PricingBlock .title {
            font-size: 24px;
         }
       }
       
       .PricingBlock .title {
          font-size: 18px;
       }
      
        .PricingBlock {
          text-align: left;
          margin: 32px 12px;
          display: inline-block;
          vertical-align: top;
        }
        .PricingBlock .boxed {
          position: relative;
          padding: 24px 16px;
          box-shadow: 0 2px 13px rgba(0, 0, 0, 0.2);
          background-color: #ffffff;
        }
        .PricingBlock.coworking .boxed {
          background: #feef00;
        }
        .PricingBlock .triangle {
          display: none;
          position: absolute;
          top: 0;
          right: 0;
          color: #fff;
          width: 0;
          height: 0;
          border-top: solid 103px #1126a9;
          border-bottom: solid 103px transparent;
          border-left: solid 103px transparent;
          z-index: 1;
        }
        .PricingBlock .triangle span {
          display: inline-block;
          color: #ffffff;
          font-family: "Maison Neue",sans-serif;
          font-size: 17px;
          font-weight: 300;
          text-transform: uppercase;
          top: -71px;
          right: 0;
          position: absolute;
          transform: rotate(45deg);
        }
        .PricingBlock.coworking .triangle {
          display: block;
        }
        .heading b {
          cursor: copy;
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
          min-height: 96px;
          justify-content: center;
          flex-direction: column;
          display: flex;
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
        .coworking .button {
          background: #fff;
          color: #0f2247;
        }

        .arrow {
          width: 100%;
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
        
        .main-arrow {
          width: 100%;
          transition: transform 0.4s 0.2s;
          transform: rotate(180deg);
          background: top left no-repeat url('/static/components/pricing/arrow-top.svg');
          width: 16px;
          height: 9px;
          position: absolute;
          right: 12px;
          cursor: pointer;
        }
        
        .arrow.down, .main-arrow.down {
          transition: transform 0.4s;
          transform: rotate(0);
        }
        .tagline {
          padding: 18px 0;
          margin: 50px 0;
          color: #1126a9;
          font-family: "Maison Neue", sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 24px;
          background: left top url('/static/yellow-sign.png') no-repeat;
        }
      `}</style>
    </div>
  }
}

class Pricing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };

    this.size = 0;

    this.handleIsActive = (blockName = '', isActive = false) => {

        if (!isActive) {
          this.size++;
        } else {
          this.size--;
        }

        this.setState({isActive: this.size > 0});
    };
  }

  render() {
    const membershipsPart1 = [
      {
        name: 'membership',
        heading: 'Membership',
        extraBenefit: '',
        price: '56,50',
        priceDescription: 'per month excl. 21% VAT',
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
        name: 'coworking',
        heading: 'Membership',
        extraBenefit: '+ flex co-working',
        price: 205,
        priceDescription: 'per month excl. 21% VAT',
        title: 'Flexible workplace, any day you like.',
        features: [
          'Super-fast wifi',
          'Unlimited coffee / tea',
          'Private events',
          'Use massage chair',
          'Ping-pong and foosball',
          'Access 24/7',
          'Contract period 1 month',
          'Use desks in co-working space',
          'Locker (add. € 15 p/m)',
          'Postal address (add. € 25 p/m)',
        ],
        tagline: 'An incredible way to work in our co-working space and with our community.'
      },
      {
        name: 'dedicated',
        heading: 'Membership',
        extraBenefit: '+ flex dedicated',
        price: 226,
        priceDescription: 'per month excl. 21% VAT',
        title: 'Dedicated workplace in co-working space.',
        features: [
          'Super-fast wifi',
          'Unlimited coffee / tea',
          'Private events',
          'Use massage chair',
          'Ping-pong and foosball',
          'Access Access 24/7',
          'Contract period 1 month',
          'Use desks in co-working space',
          'Locker (add. € 15 p/m)',
          'Postal address (add. € 25 p/m)',
          'Dedicated workplace with desk',
        ],
        tagline: 'The perfect way to set up shop right in the heart of our community.'
      },
      {
        name: 'office',
        heading: 'Membership',
        extraBenefit: '+ office (starting at)',
        price: 484,
        priceDescription: 'per month excl. 21% VAT',
        title: 'Dedicated workplace in enclosed space.',
        features: [
          'Super-fast wifi',
          'Unlimited coffee / tea',
          'Private events',
          'Use massage chair',
          'Ping-pong and foosball',
          'Access 24/7',
          'Contract period 1 month',
          'Use desks in co-working space',
          'Locker (add. € 15 p/m)',
          'Postal address (add. € 25 p/m)',
          'Dedicated workplace with desk',
          'Enclosed, lockable office',
        ],
        tagline: 'The best way to make our space yours and join our community.'
      }
    ];

    const membershipsPart2 = [
      {
        name: 'co-working-day-week',
        heading: 'Co-work a day',
        extraBenefit: '',
        price: '25,00',
        priceDescription: 'per day excl. 21% VAT',
        title: 'Access to the The Hague Tech community for 1 day',
        features: [
          'Super-fast wifi',
          'Unlimited coffee / tea',
          'Use massage chair',
          'Ping-pong and foosball',
          'Access from 09.00 till 17.00',
          '€ 100,- for 1 week (5 days)'
        ],
        tagline: 'An interesting & inspiring place to work and meet the The Hague Tech community'
      },
      {
        name: 'virtual-office',
        heading: 'Virtual office',
        extraBenefit: '',
        price: '82,25',
        priceDescription: 'per month excl. 21% VAT',
        title: 'Membership + business address',
        features: [
          'Recognized business address (register Chamber of Commerce)',
          'Mailbox at Wilhelmina van Pruisenweg 35, Den Haag (close to station)',
          'Possibility to use The Hague Tech workspace',
          'Optional: Mail forwarded twice a month'
        ],
        tagline: 'Working from home and yet an address for your business'
      },
      {
        name: 'flex-office',
        heading: 'Flexible office',
        extraBenefit: '',
        price: 'VAR',
        priceDescription: 'Price on request and need',
        title: 'Workplace in an enclosed space for 4 or 8 times a month',
        features: [
          'Super-fast wifi',
          'Unlimited coffee / tea',
          'Use massage chair',
          'Ping-pong and foosball',
          'Access from 09.00 till 17.00',
          'Private events',
          'Contract period 1 month',
          'Use desks in co-working space',
          'Locker (add. € 15 p/m)',
          'Postal address (add. € 25 p/m)',
          'Use office for 4 or 8 days a month',
          'Office for 1, 3, 5 or 7 persons',
        ],
        tagline: 'When you don\'t need a fulltime office!'
      },
    ];

    return <div className="Pricing">
      <IntroText>
        The Hague Tech offers the space you need right now, and in the future. Our dynamic building can fulfill all your needs.
      </IntroText>
      <div className="pricing-blocks-wrapper" id="firstPricingBlock">
        {R.map((membershipPart1) => <PricingBlock handleIsActive={this.handleIsActive} key={membershipPart1.name} data={membershipPart1} />, membershipsPart1)}
      </div>
      <div className="pricing-blocks-wrapper">
        <h1 className="newOfferings">New offerings</h1>
        {R.map((membershipPart2) => <PricingBlock key={membershipPart2.name} data={membershipPart2} />, membershipsPart2)}
      </div>
      <style jsx>{`
      .pricing-blocks-wrapper {
        text-align: center;
      }
      
      .newOfferings {
        font-size: 35px;
      }
      
       #firstPricingBlock {
          height: ${this.state.isActive ? '1200px' : '690px'}
        }
      
      @media(max-width: 1340px) {
        .pricing-blocks-wrapper {
          width: 1000px;
          max-width: 100%;
          margin: 0 auto;
        }
        
         #firstPricingBlock {
          height: 1490px;
        }
      }
    `}</style>
    </div>
  }
}

export default Pricing;
