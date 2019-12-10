import React from 'react';

import AboutMe from './about_me/About_Me';
import Services from './service/Services';
import Pricing from './pricing/Pricing';
import FunFact from './fun_fact/Fun_Fact';
import Review from './reviews/Review';


const About = () => (
  <>
    <AboutMe />
    <Services />
    <Pricing />
    <FunFact />
    <Review />
  </>
)

export default About;