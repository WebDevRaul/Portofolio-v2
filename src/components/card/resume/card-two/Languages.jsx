import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import ToLeft from '../../../common/content/To_Left';
import Box from './Box';

const Languages = () => (
  <div className='languages'>
    <h5><LanguageIcon /> Languages</h5>
    <ToLeft width={100} isClass='' />
    <Box title='Romanian' width={95} />
    <Box title='English' width={85} />
    <Box title='Polish' width={20} />
  </div>
)

Languages.propTypes = {

}

export default Languages;