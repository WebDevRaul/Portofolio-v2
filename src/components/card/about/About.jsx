import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import AboutMe from './about_me/About_Me';
import Services from './service/Services';
import Pricing from './pricing/Pricing';
import FunFact from './fun_fact/Fun_Fact';
import Review from './reviews/Review';

import StyledAbout from './Styled_About';

const About = ({ about }) => {
  return (
    <StyledAbout>
      <div className={classnames('about', {'slideInRight zIndex': about, 'slideOutRight': !about})}>
        <i className='top' />
        <AboutMe />
        <Services />
        <Pricing />
        <FunFact />
        <Review />
        <i className='bottom' />
      </div>
    </StyledAbout>
  )
}

About.propTypes = {
  about: PropTypes.bool.isRequired
}

export default About;