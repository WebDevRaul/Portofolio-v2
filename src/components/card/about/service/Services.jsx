import React from 'react';
import StyledServices from './Styled_Services';
import Title from '../../../common/title/Title';
import Box from './Box';

const Services = () => (
  <StyledServices>
    <Title text='My Services' />
    <div className='d-flex pl-4 first'>
      <Box logo='person' title='Web Development' text='Modern and mobile-ready website that will help you reach all of your marketing.' />
      <Box logo='person' title='Web Design' text='Lorem ipsum dolor sit amet.' />
    </div>
    <div className='d-flex pl-4 second'>
      <Box logo='person' title='Support' text='Lorem ipsum dolor sit amet.' />
      <Box logo='person' title='Review' text='Lorem ipsum dolor sit amet.' />
    </div>
  </StyledServices>
)

export default Services;