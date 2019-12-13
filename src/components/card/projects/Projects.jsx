import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../common/title/Title';
import Project from './project/Project';
import Wrapper from '../wrapper/Wrapper';

const Projects = ({ slide }) => {
  return (
    <Wrapper slide={slide} isClass=''>
      <Title text='Recent Projects' />
      <Project />
    </Wrapper>
  )
}

Projects.propTypes = {
  slide: PropTypes.bool.isRequired
}

export default Projects;