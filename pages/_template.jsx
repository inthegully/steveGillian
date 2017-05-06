import React from "react";
import { Link } from "react-router";
import { prefixLink } from "gatsby-helpers";
import Helmet from "react-helmet";
import { config } from "config";
import "../css/template.css";
import Header from "../components/Header/Header.js";

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    }
  },
  render() {
    return (
      <div className="main-body-background">
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <Header />
        <div
          style={{
            margin: `0 auto`,
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  },
})
