import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Title from '../../common/title/Title';
import Project from './project/Project';

const Projects = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Title text='Recent Projects' />
      <Project show={show} setShow={setShow} />
    </>
  )
}

Projects.propTypes = {
  projects: PropTypes.bool.isRequired
}

export default Projects;