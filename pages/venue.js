import React from 'react';
import '../css/venue.css';
import LeftLeaf from '../images/leftleaf.png';
import RightLeaf from '../images/rightleaf.png';
import DrivingMap from '../images/SGMapclear.png';

export default class Venue extends React.Component {
  render() {
    return (
      <div className="venue-height">
        <div className="venue-body">
          <div className="title-container">
            <img className="title-leaf" src={LeftLeaf} alt="left leaf"/>
            <h1>Venue Information</h1>
            <img className="title-leaf" src={RightLeaf} alt="right leaf"/>
          </div>
          <div className="driving-container">
            <h3 className="instruction-title">Red Cliff Ranch Driving Instructions</h3>
            <div className="instruction-container">
              <h4 className="instruction-place">From Salt Lake City</h4>
              <ol className="instructions">
                <li className="instruction-item">
                  Head East on I-80
                </li>
                <li className="instruction-item">
                  Take the Highway 40 to Heber city
                </li>
                <li className="instruction-item">
                  Follow instructions below
                </li>
              </ol>
            </div>
            <div className="instruction-container">
              <h4 className="instruction-place">From Provo</h4>
              <ol className="instructions">
                <li className="instruction-item">
                  Head East up Provo Canyon into Heber City
                </li>
                <li className="instruction-item">
                  Follow instructions below
                </li>
              </ol>
            </div>
              <ol className="final-instructions">
                <li className="instruction-item">
                  In Heber City, go East on Center Street (Wells Fargo on the corner)
                </li>
                <li className="instruction-item">
                  Continue East on Center Street for 8.4 miles (the name changes to
                  Lake Creek Road just before entering Lake Creek Canyon)
                </li>
                <li className="instruction-item">
                  Continue past the Timberlakes turnoff for 1.3 miles where you
                  will see a three rail wooden fence on the left
                </li>
                <li className="instruction-item">
                  Your desination, Red Cliff Ranch, is the second entrance from
                  where the fence begins
                </li>
              </ol>
          </div>
          <img className="map" src={DrivingMap} alt="map"/>
          <p className="weather-warning">
            Our ceremony and reception will take place outdoors, please expect natural terrain​
            and cool nighttime air.
          </p>
        </div>
      </div>
    );
  }
}
