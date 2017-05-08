import React from "react";
import { Link } from "react-router";
import { prefixLink } from "gatsby-helpers";
import Helmet from "react-helmet";
import { config } from "config";
import "./Header.css";
import Wreath from "../../images/wreath.png";

export default class Header extends React.Component {
  render() {
    return(
      <div>
        <div className="header">
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
            }}
          >
            <div className="wreath-container">
              <img className="wreath" src={Wreath} alt="wreath"/>
            </div>
            <div className="nav">
              <Link
                to={prefixLink("/rsvp/")}
                className="nav-item"
              >
                RSVP
              </Link>
              <Link
                to={prefixLink("/venue/")}
                className="nav-item"
              >
                Venue
              </Link>
              <Link
                to={prefixLink("/schedule/")}
                className="nav-item"
              >
                Schedule
              </Link>
              <Link
                to={prefixLink("/details/")}
                className="nav-item"
              >
                Details
              </Link>
              <Link
                to={prefixLink("/registry/")}
                className="nav-item"
              >
                Registry
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
