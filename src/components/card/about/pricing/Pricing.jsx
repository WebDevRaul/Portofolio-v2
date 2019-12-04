import React from 'react';

import Title from '../../../common/title/Title';
import Box from './Box';

import StyledPricing from './Styled_Pricing';

const Pricing = () => (
  <StyledPricing>
    <Title text='Pricing' />
    <i className='top-right' />
    <i className='top-left' />
    <div className='pricing pl-4 pr-4'>
      <Box icon='people'option='Basic' price='15' basic={true} />
      <Box icon='people'option='Pro' price='30' />
    </div>
    <i className='bottom-right' />
    <i className='bottom-left' />
  </StyledPricing>
)

export default Pricing;