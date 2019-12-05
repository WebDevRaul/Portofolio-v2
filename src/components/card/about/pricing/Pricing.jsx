import React from 'react';

import Title from '../../../common/title/Title';
import Box from './Box';
import CustomButton from '../../../common/button/Custom_Button';
import SpeedIcon from '@material-ui/icons/Speed';

import StyledPricing from './Styled_Pricing';

const Pricing = () => {

  const onClick = () => {}

  return (
    <StyledPricing>
      <Title text='Pricing' />
      <div className='wrapper'>
        <i className='top-right' />
        <i className='top-left' />
        <div className='pricing pl-4 pr-4'>
          <Box icon={<SpeedIcon />} option='Basic' price='15' basic={true} />
          <Box icon={<SpeedIcon />} option='Pro' price='30' />
        </div>
        <i className='bottom-right' />
        <i className='bottom-left' />
      </div>
      <div className='buttons'>
        <CustomButton text='Buy Basic' onClick={onClick} />
        <CustomButton text='Buy Pro' onClick={onClick} />
      </div>
    </StyledPricing>
  )
}

export default Pricing;