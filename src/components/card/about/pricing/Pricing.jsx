import React from 'react';

import Title from '../../../common/title/Title';
import Box from './Box';
import CustomButton from '../../../common/button/Custom_Button';
import SpeedIcon from '@material-ui/icons/Speed';
import ToRight from '../../../common/content/To_Right';
import ToLeft from '../../../common/content/To_Left';
import FromTop from '../../../common/content/From_Top';
import FromBottom from '../../../common/content/From_Bottom';

import StyledPricing from './Styled_Pricing';

const Pricing = () => {

  const onClick = () => {}

  return (
    <StyledPricing>
      <Title text='Pricing' />
      <div className='pricing-wrapper'>
        <ToRight width={25} isClass='' />
        <FromTop height={25} isClass='p-top' />
        <ToLeft width={25} isClass='right top' />
        <FromTop height={25} isClass='p-top right' />
        <div className='pricing'>
          <Box icon={<SpeedIcon />} option='Basic' price='15' basic={true} />
          <Box icon={<SpeedIcon />} option='Pro' price='30' />
        </div>
        <ToRight width={25} isClass='bottom' />
        <FromBottom height={25} isClass='p-bottom' />
        <ToLeft width={25} isClass='right bottom' />
        <FromBottom height={25} isClass='p-bottom right' />
      </div>
      <div className='buttons'>
        <CustomButton text='Buy Basic' onClick={onClick} />
        <CustomButton text='Buy Pro' onClick={onClick} />
      </div>
    </StyledPricing>
  )
}

export default Pricing;