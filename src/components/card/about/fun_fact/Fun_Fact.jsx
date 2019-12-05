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
      <i className='top-left'/>
      <i className='top-right'/>
      <Box logo={<MusicNoteIcon />} text='lorem lorem' />
      <i className='first' />
      <Box logo={<LocalCafeIcon />} text='lorem lorem' />
      <i className='second' />
      <Box logo={<FlagIcon />} text='lorem lorem' />
      <i className='third' />
      <Box logo={<TheatersIcon />} text='lorem lorem' />
    </div>
  </StyledFunFact>
)

export default FunFact;