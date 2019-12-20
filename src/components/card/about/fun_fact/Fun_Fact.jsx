import React from 'react';

import Title from '../../../common/title/Title';
import Box from './Box';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import FlagIcon from '@material-ui/icons/Flag';
import PetsIcon from '@material-ui/icons/Pets';

import StyledFunFact from './Styled_Fun_Fact';
import ToRight from '../../../common/content/To_Right';
import ToLeft from '../../../common/content/To_Left';
import FromTop from '../../../common/content/From_Top';

const FunFact = () => (
  <StyledFunFact>
    <Title text='Fun Fact' />
    <div className='fun'>
      <ToLeft width={50} isClass='left' />
      <ToRight width={50} isClass='right' />
      <div className='d-flex justify-content-around w-50 position-relative'>
        <Box logo={<GitHubIcon />} text='2000 contributions over the past year.' />
        <FromTop height={100} isClass='top' />
        <Box logo={<LocalCafeIcon />} text='42 Cups of coffee.' />
        <FromTop height={100} isClass='top right' />
      </div>
      <div className='d-flex justify-content-around w-50 position-relative'>
        <Box logo={<FlagIcon />} text='11 Countries visited.' />
        <FromTop height={100} isClass='top' />
        <Box logo={<PetsIcon />} text='I like hamsters.' />
      </div>
    </div>
  </StyledFunFact>
)

export default FunFact;