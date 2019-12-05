import React from 'react';
import Li from './Li';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Links = () => (
  <ul>
    <Li text={<FacebookIcon />} path='https://www.facebook.com/raul.savin.3' />
    <Li text={<TwitterIcon />} path='https://twitter.com' />
    <Li text={<InstagramIcon />} path='https://www.instagram.com' />
    <Li text={<LinkedInIcon />} path='https://www.linkedin.com' />
  </ul>
)

export default Links;