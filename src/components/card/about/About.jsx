import React from 'react';
import PropTypes from 'prop-types';
import AboutMe from './about_me/About_Me';
import Services from './service/Services';
import Pricing from './pricing/Pricing';
import FunFact from './fun_fact/Fun_Fact';
import Review from './reviews/Review';
import Wrapper from '../wrapper/Wrapper';


const About = ({ slide }) => (
  <Wrapper slide={slide} isClass='one'>
    <AboutMe />
    <Services />
    <Pricing />
    <FunFact />
    <Review />
  </Wrapper>
)

About.propTypes = {
  slide: PropTypes.bool.isRequired
}

export default About;