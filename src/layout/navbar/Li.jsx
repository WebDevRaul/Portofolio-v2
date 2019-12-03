import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classname';

const Li = ({ text, icon, onClick, active }) => (
  <li>
    <div className={classnames('', {'active': active})} onClick={() => onClick(text)}>
      <span className="material-icons">{icon}</span>
      <span>{text}</span>   
    </div> 
  </li>
)

Li.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

export default Li;