import React from 'react';
import PropTypes from 'prop-types';
import CardOne from './card_one/Card_One';
import CardTwo from './card-two/Card_Two';
import CardTree from './card-tree/Card_Tree';
import Wrapper from '../wrapper/Wrapper';

const Resume = ({ slide }) => {
  return(
    <Wrapper slide={slide} >
      <i className='resume' style={{ position: 'absolute', top: '-70px' }} />
      <CardOne />
      <CardTwo />
      <CardTree />
    </Wrapper>
  )
}

Resume.propTypes = {
  slide: PropTypes.bool.isRequired
}

export default Resume;