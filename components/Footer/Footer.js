import React from 'react';
import { Link } from "react-router";
import { prefixLink } from "gatsby-helpers";
import Helmet from "react-helmet";
import { config } from "config";
import "./Footer.css";
import Logo from "../../images/logo.png";

export default class Footer extends React.Component {
  render() {
    return(
      <div>
        <div className="footer">
          <a className="footer-item" href="http://www.inthegully.com/" target="_blank">
            <p className="footer-words">
              website by
            </p>
            <img className="logo" src={Logo} alt="in the gully logo"/>
          </a>
        </div>
      </div>
    );
  }
}
