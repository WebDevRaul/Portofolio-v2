import React from 'react';
import StyledServices from './Styled_Services';
import Title from '../../../common/title/Title';
import Box from './Box';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const Services = () => (
  <StyledServices>
    <Title text='My Services' />
    <div className='d-flex pl-4 first'>
      <Box logo={<DevicesOtherIcon />} title='Web Development' text='Modern and mobile-ready website that will help you reach all of your marketing.' />
      <Box logo={<ImportantDevicesIcon />} title='Web Design' text='Lorem ipsum dolor sit amet.' />
    </div>
    <div className='d-flex pl-4 second'>
      <Box logo={<HeadsetMicIcon />} title='Support' text='Lorem ipsum dolor sit amet.' />
      <Box logo={<SupervisorAccountIcon />} title='Review' text='Lorem ipsum dolor sit amet.' />
    </div>
  </StyledServices>
)

export default Services;