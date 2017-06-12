import React from 'react';
import '../css/schedule.css';
import LeftLeaf from '../images/leftleaf.png';
import RightLeaf from '../images/rightleaf.png';

export default class Schedule extends React.Component {
  render() {
    return (
      <div className="schedule-height">
        <div className="schedule-body">
          <div className="title-container">
            <img className="title-leaf" src={LeftLeaf} alt="left leaf"/>
            <h1>Wedding Day Schedule</h1>
            <img className="title-leaf" src={RightLeaf} alt="right leaf"/>
          </div>
          <ul className="schedule">
            <li className="schedule-item">
              3:30  |  Guests Arrive (please don't be late!)
            </li>
            <li className="schedule-item">
              4:00  |  Ceremony
            </li>
            <li className="schedule-item">
              4:45  |  Cocktails and Appetizers
            </li>
            <li className="schedule-item">
              6:00  |  Dinner
            </li>
            <li className="schedule-item">
              7:30  |  Cake Cutting and Dancing
            </li>
            <li className="schedule-item">
              10:30  |  End
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
