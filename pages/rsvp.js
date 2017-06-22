import React from 'react';
import '../css/rsvp.css';

export default class Rsvp extends React.Component {
  render() {
    return (
      <div>
        <div className="rsvp-body">
          <iframe className="form" src="https://docs.google.com/forms/d/e/1FAIpQLScZQeYCmZeJ0IniSx4EgQSGzvSUnmigF0_4Fs_WTLNCTlrA4w/viewform?embedded=true" width="100%" height="1050" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no">Loading...</iframe>
        </div>
      </div>
    );
  }
}
