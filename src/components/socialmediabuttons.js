import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../styles/font-awesome-4.7.0/css/font-awesome.css'

const SocialMediaButtons = () => (
  <div className="social-media-buttons">
    <FontAwesome name='twitter' size="2x" style={{borderRadius: 90, backgroundColor: '#00aced', padding: 5, color: 'white'}} onClick={() => window.open('https://twitter.com/azbo400')}/>
    <FontAwesome name='github' size="2x" style={{borderRadius: 90, backgroundColor: 'grey', padding: 5, color: 'white'}} onClick={() => window.open('https://github.com/azbo400')}/>
    <FontAwesome name='instagram' size="2x" style={{borderRadius: 90, backgroundColor: '#fb3958', padding: 5, color: 'white'}} onClick={() => window.open('https://instagram.com/ryanarnouk')}/>
    <FontAwesome name='free-code-camp' size="2x" style={{borderRadius: 90, backgroundColor: 'green', padding: 5, color: 'white'}} onClick={() => window.open('https://freecodecamp.com/azbo400')}/>
  </div>
);

export default SocialMediaButtons;
