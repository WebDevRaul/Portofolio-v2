import React from 'react';
import PropTypes from 'prop-types';
import ToLeft from '../../../common/content/To_Left';
import ToRight from '../../../common/content/To_Right';

const Logo = ({ logo, text }) => (
  <div className='logo'>
    <p>{text}</p>
    <div className='outer-logo'>
      <ToLeft width={25} isClass='right top' />
      <ToRight width={25} isClass='left top' />
      <div className='inner-logo'>
        {logo}
      </div>
      <ToLeft width={25} isClass='right bottom' />
      <ToRight width={25} isClass='left bottom' />
    </div>
  </div>
)

Logo.propTypes = {
  logo: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
}

export default Logo;