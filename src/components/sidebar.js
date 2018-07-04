import React from 'react';

const Sidebar = (props) => (
  <div 
    style={{
      maxWidth: 960, 
      padding: '0.5rem',
      marginBottom: '25px'
    }}
    >
    <strong>{props.title}<br /></strong> {props.description} 
  </div>
);

export default Sidebar;