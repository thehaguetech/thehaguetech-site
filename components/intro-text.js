import React, { Component } from 'react';

class IntroText extends Component {
  render() {
    return <div className="IntroText">
      {this.props.children}
      <style jsx>{`
        .IntroText {
          margin: 3rem auto 4rem auto;
          width: 32rem;
          max-width: 100%;
          color: #0F2247;
          font-family: "Maison Neue",sans-serif;
          font-size: 17px;
          font-weight: 500;
          line-height: 24px;
          text-align: center;
          padding: 0 24px;
        }
      `}</style>
    </div>
  }
}

export default IntroText;
