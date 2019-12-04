import React from 'react';
import PropTypes from 'prop-types';

import About from './about/About';
import Resume from './resume/Resume';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

const Card = ({ about, resume, projects, contact }) => {
  return (
    <div style={{ position: 'relative', margin: '15px 0' }}>
      <About about={about} />
      <Resume resume={resume} />
      <Projects projects={projects} />
      <Contact contact={contact} />
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