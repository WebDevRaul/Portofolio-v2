import React from 'react';
import SchoolIcon from '@material-ui/icons/School';
import ToRight from '../../../common/content/To_Right';
import Box from './Box';

const Education = () => (
  <div className='education'>
    <h5><SchoolIcon /> Education</h5>
    <ToRight width={100} isClass='left' />
    <Box
      from='2018'
      to='Present'
      title='Coding meetups'
      description='freeCodeCamp - Reading, UK.'
    />
  </div>
)

export default Education;