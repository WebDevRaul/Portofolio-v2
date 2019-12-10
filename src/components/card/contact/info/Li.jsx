import React from 'react';
import PropTypes from 'prop-types';
import Span from '../../../common/span/Span';
import ToLeft from '../../../common/content/To_Left';
import ToRight from '../../../common/content/To_Right';


const Li = ({ span, p }) => (
  <div className='list'>
    <Span text={span} />
    <p className='mb-0'>{p}</p>
    <ToLeft width={50} isClass='bottom left' />
    <ToRight width={50} isClass='bottom right' />
  </div>
)

Li.propTypes = {
  span: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired
}

export default Li;