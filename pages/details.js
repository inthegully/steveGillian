import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import '../css/details.css';
import LeftLeaf from '../images/leftleaf.png';
import RightLeaf from '../images/rightleaf.png';
import Iframe from 'react-iframe';

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
                Parking is available at the venue. We will provide a small shuttle with pick-up locations in Park City and Heber for guests that may need this service.
                The shuttle will depart promptly and only at the listed times below.
              </p>
              <h4 className="shuttle-direction">
                Departure
              </h4>
              <p className="shuttle-detail">
                Park City - 2:30 P.M. <br/>
                The shuttle will be off Main Street on Swede Alley behind the Post Office.
              </p>
              <div className="shuttle-map">
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.2587493348956!2d-111.41527068460177!3d40.491660979356496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874df5bb7d9dc37f%3A0x3b614f152127cc20!2sHoliday+Inn+Express+Heber+City!5e0!3m2!1sen!2sus!4v1497301062590"
                  width="auto"
                  height="auto"
                  frameBorder="0"
                  style="border:0"
                  allowFullScreen
                />
              </div>
              <p className="shuttle-detail">
                Heber City - 3:15 P.M. <br/>
                Holiday Inn Express
              </p>
              <div className="shuttle-map">
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.3544266378935!2d-111.49796468459712!3d40.64411697933928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875272bc51589653%3A0x7e248ff6f95563c3!2sUS+Post+Office!5e0!3m2!1sen!2sus!4v1497301097679"
                  width="auto"
                  height="auto"
                  frameBorder="0"
                  style="border:0"
                  allowFullScreen
                />
              </div>
              <h4 className="shuttle-direction">
                Return
              </h4>
              <p className="shuttle-detail">
                Red Cliff Ranch - 10:45 P.M. <br/>
                The shuttle will leave the venue at 10:45 P.M. and return to the same pick up locations.
                Estimated arrival time in Heber will be 11:00 P.M. and 11:30 P.M. in Park City.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
