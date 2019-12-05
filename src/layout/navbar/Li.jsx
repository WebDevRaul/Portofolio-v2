import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Li = ({ text, icon, onClick, active }) => (
  <li>
    <div className={classnames('', {'active': active})} onClick={() => onClick(text)}>
      {icon}
      <span>{text}</span>   
    </div> 
  </li>
)

Li.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

export default Li;