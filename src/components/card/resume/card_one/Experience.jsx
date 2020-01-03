import React from 'react';
import WorkIcon from '@material-ui/icons/Work';
import ToLeft from '../../../common/content/To_Left';
import Box from './Box';

const Experience = () => (
  <div className='experience'>
    <h5><WorkIcon /> Experience</h5>
    <ToLeft width={100} isClass='' />
    <Box
      from='2018'
      to='Present'
      title='Web developer'
      description='Building websites ever since.'
    />
    <ToLeft width={100} isClass='' />
    <Box
      from='2017'
      to='2018'
      title='Junior web developer'
      description='Learning the basics of programming from different sources like Codecademy, freeCodeCamp & Udemy.'
    />
  </div>
)

export default Experience;