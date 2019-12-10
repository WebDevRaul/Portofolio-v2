import React from 'react';

import Title from '../../../common/title/Title';
import Box from './Box';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import FlagIcon from '@material-ui/icons/Flag';
import TheatersIcon from '@material-ui/icons/Theaters';

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
        <Box logo={<MusicNoteIcon />} text='lorem lorem' />
        <FromTop height={100} isClass='top' />
        <Box logo={<LocalCafeIcon />} text='lorem lorem' />
        <FromTop height={100} isClass='top right' />
      </div>
      <div className='d-flex justify-content-around w-50 position-relative'>
        <Box logo={<FlagIcon />} text='lorem lorem' />
        <FromTop height={100} isClass='top' />
        <Box logo={<TheatersIcon />} text='lorem lorem' />
      </div>
    </div>
  </StyledFunFact>
)

export default FunFact;