import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import '../css/details.css';
import LeftLeaf from '../images/leftleaf.png';
import RightLeaf from '../images/rightleaf.png';

export default class Details extends React.Component {
  render() {
    return (
      <div className="details-height">
        <div className="details-body">
          <div className="title-container">
            <img className="title-leaf" src={LeftLeaf} alt="left leaf"/>
            <h1>Details</h1>
            <img className="title-leaf" src={RightLeaf} alt="right leaf"/>
          </div>
          <div className="details-container">
            <div className="Attire">
              <h3 className="detail-title">Attire</h3>
              <p className="detail-description">
                Our ceremony and reception are semiformal. We will be outdoors, so
                please expect it to be warmer during the day and colder at night
                (we will be in the mountains!). There is uneven
                terrain so stilletos are not recommended.
              </p>
            </div>
            <div className="attractions">
              <h3 className="detail-title">Attractions and Activities</h3>
              <p className="detail-description">
                We hope you all get the chance to explore the amazing things
                to do in Utah on your visit. Please don’t hesitate to contact us
                if you need additional suggestions on activities, hikes, or attractions.
              </p>
              <div className="attraction-containter">
                <h4 className="attraction-city">Heber</h4>
                <ul className="attraction-list">
                  <li className="attraction-item">
                    <a className="attraction-link" href="https://www.tripadvisor.com/Attractions-g57009-Activities-Heber_City_Utah.html" target="_blank">
                      Things to do in Heber City
                    </a>
                  </li>
                  <li className="attraction-item">
                    <a className="attraction-link" href="https://soldierhollowclassic.com/" target="_blank">
                      Soldier Hollow Sheepdog Championship
                    </a>
                  </li>
                  <li className="attraction-item">
                    <a className="attraction-link" href="https://midwayswissdays.com/" target="_blank">
                      Midway Swiss Days Festival
                    </a>
                  </li>
                </ul>
              </div>
              <div className="attraction-containter">
                <h4 className="attraction-city">Park City</h4>
                <ul className="attraction-list">
                  <li className="attraction-item">
                    <a className="attraction-link" href="https://www.tripadvisor.com/Attractions-g57097-Activities-Park_City_Utah.html" target="_blank">
                      Trip Advisor
                    </a>
                  </li>
                  <li className="attraction-item">
                    <a className="attraction-link" href="https://historicparkcityutah.com/news/13-things-to-do-in-park-city-this-summer" target="_blank">
                      Things to do in Park City
                    </a>
                  </li>
                </ul>
              </div>
              <div className="attraction-containter">
                <h4 className="attraction-city">Salt Lake City</h4>
                <ul className="attraction-list">
                  <li className="attraction-item">
                    <a className="attraction-link" href="https://www.visitsaltlake.com/things-to-do/" target="_blank">
                      Visit Salt Lake
                    </a>
                  </li>
                  <li className="attraction-item">
                    <a className="attraction-link" href="http://vacationidea.com/weekend_getaways/best-things-to-do-in-salt-lake-city.html" target="_blank">
                      Best things to do
                    </a>
                  </li>
                  <li className="attraction-item">
                    <a className="attraction-link" href="https://www.tripadvisor.com/Attractions-g60922-Activities-Salt_Lake_City_Utah.html" target="_blank">
                      Trip Advisor
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="accommodations">
              <h3 className="detail-title">Accommodations</h3>
              <p className="detail-description">
                <a className="attraction-link" href="https://drive.google.com/open?id=0B7FtEI2KSIUHek5BSXZlYjliei1WaTRwUzM5bjNyS0xzOUhZ" target="_blank">Hotel Recommendations</a>
              </p>
            </div>
            <div className="transportation">
              <h3 className="detail-title">Transportation</h3>
              <p className="detail-description">
                Coming Soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
