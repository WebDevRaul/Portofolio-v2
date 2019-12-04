import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import AboutMe from './about_me/About_Me';
import Services from './service/Services';

import StyledAbout from './Styled_About';
import Pricing from './pricing/Pricing';

const About = ({ about }) => {
  return (
    <StyledAbout>
      <div className={classnames('about', {'slideInRight': about, 'slideOutRight': !about})}>
        <AboutMe />
        <Services />
        <Pricing />
      </div>
    </StyledAbout>
  )
}

About.propTypes = {
  about: PropTypes.bool.isRequired
}

export default About;