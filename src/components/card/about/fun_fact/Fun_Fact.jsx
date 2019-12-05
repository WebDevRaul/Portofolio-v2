import React from 'react';

import Title from '../../../common/title/Title';
import Box from './Box';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import FlagIcon from '@material-ui/icons/Flag';
import TheatersIcon from '@material-ui/icons/Theaters';

import StyledFunFact from './Styled_Fun_Fact';

const FunFact = () => (
  <StyledFunFact>
    <Title text='Fun Fact' />
    <div className='fun'>
      <Box logo={<MusicNoteIcon />} text='lorem lorem' />
      <Box logo={<LocalCafeIcon />} text='lorem lorem' />
      <Box logo={<FlagIcon />} text='lorem lorem' />
      <Box logo={<TheatersIcon />} text='lorem lorem' />
    </div>
  </StyledFunFact>
)

export default FunFact;