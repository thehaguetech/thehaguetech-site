import dynamic from 'next/dynamic';
import React, { Component } from 'react';

const Button = dynamic(() => import('../components/button.js'));

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.state[e.target.name] = e.target.value;
    this.forceUpdate();
  }
  submitForm() {
    fetch('/api/mail/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        tel: this.state.tel,
        message: this.state.message
      })
    }).then(function() {
      alert('Thank you for your email!')
    });

  }
  render() {
    return <div className="ContactForm flex">
      <div className="flex-1 form">
        <p>
          The Hague Tech is growing fast. Are you ready to join us? Just book a tour and you will be delighted!
        </p>
        <form onSubmit={() => this.submitForm()}>
          <input required type="text" name="name" placeholder="Name" onChange={this.handleChange} />
          <input required type="email" name="email" placeholder="Email" onChange={this.handleChange} />
          <input type="tel" name="tel" placeholder="Phone number" onChange={this.handleChange} />
          <textarea name="message" placeholder="Message" onChange={this.handleChange}></textarea>
          <div align="right">
            <Button type="submit">
              send message
            </Button>
          </div>
        </form>
      </div>
      <div className="flex-1 address">
        <p>
          <img src="/static/components/contact-form/map.png" alt="Map of The Hague, including a pointer at The Hague Tech" />
        </p>
        <p>
          The Hague Tech<br />
          The Netherlands
        </p>
        <p>
          <a href="tel:+31702060030">+31 (0)70 206 00 30</a>
        </p>
      </div>
      <style jsx>{`
        .ContactForm p {
          color: #0f2247;
          font-family: "Maison Neue", sans-serif;
          font-size: 24px;
          font-weight: 500;
          line-height: 32px;
        }
        .flex {
          display: flex;
          justify-content: space-between;
        }
        .flex-1 {
          flex: 1;
        }
        @media (max-width: 480px) {
          .flex {
            display: block;
          }
        }
        .form {
          margin-bottom: 26px;
        }
        .ContactForm input[type="text"],
        .ContactForm input[type="email"],
        .ContactForm input[type="tel"],
        .ContactForm textarea {
          color: #0f2247;
          font-family: "Maison Neue", sans-serif;
          font-size: 19px;
          font-weight: 300;
          line-height: 40px;
          height: 40px;
          background-color: #f8f8f8;
          border: none;
          display: block;
          margin: 24px 0;
          width: 100%;
          padding: 0 8px;
        }
        .ContactForm textarea {
          padding: 6px 8px;
          height: 200px;
        }
        .address p {
          color: #0f2247;
          font-family: "Maison Neue", sans-serif;
          font-size: 19px;
          font-weight: 300;
          line-height: 32px;
        }
        @media(min-width: 480px) {
          .address {
            margin: 0 0 0 34px;
          }
        }
        .address a {
          color: #0f2247;
        }
      `}</style>
    </div>
  }
}

export default ContactForm;
