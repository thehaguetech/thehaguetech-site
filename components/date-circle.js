import React, { Component } from 'react';
import moment from 'moment';

class DateCircle extends Component {
  render() {
    return <div className="DateCircle">
      <div className="date" title={moment(this.props.date).format('MMMM Do YYYY')}>
        <div className="date-month">
          {moment(this.props.date).format('MMM')}
        </div>
        <div className="date-number">
          {moment(this.props.date).format('D')}
        </div>
      </div>
      <style jsx>{`
        .DateCircle {
          z-index: 2;
          position: relative;
        }
        .date {
          width: 57px;
          height: 57px;
          background-color: #ff3e6c;
          margin: -28px auto 0;
          border-radius: 57px;
          color: #fff;
          text-align: center;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        .date-month {
          height: 14px;
          color: #ffffff;
          font-family: "Maison Neue", sans-serif;
          font-size: 12px;
          font-weight: 300;
          text-transform: uppercase;
          text-align: center;
        }
        .date-number {
          color: #ffffff;
          font-family: "Maison Neue Bold", sans-serif;
          font-size: 22px;
          font-weight: 700;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  }
}

export default DateCircle;
