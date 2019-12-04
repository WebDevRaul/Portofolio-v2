import React from 'react';
import PropTypes from 'prop-types';

import StyledSpan from './Styled_Span';

const Span = ({ text }) => (
  <StyledSpan>
    {text}
  </StyledSpan>
)

Span.propTypes = {
  text: PropTypes.string.isRequired
}

export default Span;