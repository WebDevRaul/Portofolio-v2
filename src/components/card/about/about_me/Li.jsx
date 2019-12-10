import React from 'react';
import PropTypes from 'prop-types';
import Span from '../../../common/span/Span';
import ToLeft from '../../../common/content/To_Left';
import ToRight from '../../../common/content/To_Right';

const Li = ({ span, p }) => (
  <>
    <div className='list'>
      <Span text={span} />
      <p className='mb-0'>{p}</p>
    </div>
    <div className='d-flex'>
      <ToLeft isClass='' width={50} />
      <ToRight isClass='' width={50} />
    </div>
  </>
)

Li.propTypes = {
  span: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired
}

export default Li;