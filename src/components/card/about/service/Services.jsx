import React from 'react';
import Title from '../../../common/title/Title';
import Box from './Box';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import FromTop from '../../../common/content/From_Top';
import FromBottom from '../../../common/content/From_Bottom';
import ToRight from '../../../common/content/To_Right';
import ToLeft from '../../../common/content/To_Left';

import StyledServices from './Styled_Services';

const Services = () => (
  <StyledServices>
    <div className='services'>
      <Title text='My Services' />
      <div className='d-flex first'>
        <Box logo={<DevicesOtherIcon />} title='Web Development' text='Modern and mobile-ready website that will help you reach all of your marketing.'>
          <FromBottom height={100} isClass='right top' />
        </Box>
        <Box logo={<ImportantDevicesIcon />} title='Web Design' text='Lorem ipsum dolor sit amet.'>
          <ToRight width={100} isClass='bottom' />
        </Box>
      </div>
      <div className='d-flex second'>
        <Box logo={<HeadsetMicIcon />} title='Support' text='Lorem ipsum dolor sit amet.'>
          <ToLeft width={100} isClass='n-top' />
        </Box>
        <Box logo={<SupervisorAccountIcon />} title='Review' text='Lorem ipsum dolor sit amet.'>
          <FromTop height={100} isClass='n-left top' />
        </Box>
      </div>
    </div>
  </StyledServices>
)

export default Services;