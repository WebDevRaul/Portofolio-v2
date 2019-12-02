import React from 'react';
import PropTypes from 'prop-types';

const Li = ({ text, icon }) => (
  <li>
    <div>
      <span className="material-icons">{icon}</span>
      <span>{text}</span>   
    </div> 
  </li>
)

Li.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Li;