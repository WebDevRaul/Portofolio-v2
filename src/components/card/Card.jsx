import React from 'react';
import PropTypes from 'prop-types';

import About from './about/About';
import Resume from './resume/Resume';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

const Card = ({ about, resume, projects, contact }) => {
  return (
    <div className='ml-3 mr-3 ml-sm-0 mr-sm-0' style={{ position: 'relative', margin: '10px 0' }}>
      <About slide={about} />
      <Resume slide={resume} />
      <Projects slide={projects} />
      <Contact slide={contact} />
    </div>
  )
}

Card.propTypes = {
  about: PropTypes.bool.isRequired,
  resume: PropTypes.bool.isRequired,
  projects: PropTypes.bool.isRequired,
  contact: PropTypes.bool.isRequired
}

export default Card;