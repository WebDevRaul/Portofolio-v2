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
      title='Lorem ipsum'
      description='Lorem ipsum dolor sit amet, consectetur adipisicing elit?'
    />
    <ToLeft width={100} isClass />
    <Box
      from='2017'
      to='2018'
      title='Lorem ipsum'
      description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dolores?'
    />
  </div>
)

export default Experience;