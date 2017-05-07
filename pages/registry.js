import React from 'react';
import '../css/registry.css';
import LeftLeaf from '../images/leftleaf.png';
import RightLeaf from '../images/rightleaf.png';
import Zola from '../images/zola.png'

export default class Schedule extends React.Component {
  render() {
    return (
      <div className="registry-height">
        <div className="registry-body">
          <div className="title-container">
            <img className="title-leaf" src={LeftLeaf} alt="left leaf"/>
            <h1>Registry</h1>
            <img className="title-leaf" src={RightLeaf} alt="right leaf"/>
          </div>
          <h3>
            We are registered at Zola Wedding Registry online. Click the icon below to be taken there!
          </h3>
          <img className="zola" src={Zola} alt="Zola Logo"/>
        </div>
      </div>
    );
  }
}
