import React from 'react';
import SocialMediaButtons from './socialmediabuttons';

const Footer = () => (
  <div className="footer">
    <div style={{textAlign: 'center', margin: 20}}>
      <h1>Developed by Ryan A 2018</h1>
      <p>Check out my main website <a onClick={() => window.open('https://azbo400.github.io')} href="">here</a></p>
      <SocialMediaButtons />
    </div>
  </div>
);

export default Footer; 