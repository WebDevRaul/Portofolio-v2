import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import StyledWrapper from './Styled_Wrapper';

const Wrapper = ({ children, slide, isClass }) => (
  <StyledWrapper>
    <i className='cover-scroll' />
    <div className={classnames(`wrapper ${isClass}`, {'slideInRight zIndex': slide, 'slideOutRight': !slide})}>
      <i className='content-top' />
      {children}
      <i className='content-bottom' />
    </div>
  </StyledWrapper>
)

Wrapper.propTypes = {
  children: PropTypes.object.isRequired,
  slide: PropTypes.bool.isRequired,
  isClass: PropTypes.string
}

export default Wrapper;