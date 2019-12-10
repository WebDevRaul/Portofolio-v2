import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import StyledWrapper from './Styled_Wrapper';

const Wrapper = ({ children, slide }) => (
  <StyledWrapper>
    <div className={classnames('wrapper', {'slideInRight zIndex': slide, 'slideOutRight': !slide})}>
      <i className='top' />
      {children}
      <i className='bottom' />
    </div>
  </StyledWrapper>
)

Wrapper.propTypes = {
  children: PropTypes.object.isRequired,
  slide: PropTypes.bool.isRequired
}

export default Wrapper;