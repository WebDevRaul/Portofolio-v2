import React from 'react';
import PropTypes from 'prop-types';
import Span from '../../../common/span/Span';

const Li = ({ span, p }) => (
  <div className='list'>
    <Span text={span} />
    <p className='mb-0'>{p}</p>
  </div>
)

Li.propTypes = {
  span: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired
}

export default Li;