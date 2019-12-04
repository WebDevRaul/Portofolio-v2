import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import AboutMe from './about_me/About_Me';
import Services from './service/Services';

import StyledAbout from './Styled_About';

const About = ({ about }) => {
  return (
    <StyledAbout>
      <div className={classnames('about', {'slideInRight': about, 'slideOutRight': !about})}>
        <AboutMe />
        <Services />
      </div>
    </StyledAbout>
  )
}

About.propTypes = {
  about: PropTypes.bool.isRequired
}

export default About;