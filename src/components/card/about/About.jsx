import React from 'react';
import PropTypes from 'prop-types';
import AboutMe from './about_me/About_Me';
import Services from './service/Services';
import Pricing from './pricing/Pricing';
import FunFact from './fun_fact/Fun_Fact';
import Review from './reviews/Review';
import Wrapper from '../wrapper/Wrapper';


const About = ({ slide, onRedirect }) => (
  <Wrapper slide={slide} isClass='about-wrapper' >
    <i className='about-i' />
    <AboutMe />
    <Services />
    <Pricing onRedirect={onRedirect} />
    <FunFact />
    <Review />
  </Wrapper>
)

About.propTypes = {
  slide: PropTypes.bool.isRequired,
  onRedirect: PropTypes.func.isRequired
}

export default About;