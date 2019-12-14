import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../common/title/Title';
import Project from './project/Project';
import Wrapper from '../wrapper/Wrapper';

const Projects = ({ slide, onOpen }) => {
  return (
    <>
      <Wrapper slide={slide} isClass='projects-wrapper'>
      <i className='projects' style={{ position: 'absolute', top: '-70px' }} />
        <Title text='Recent Projects' />
        <Project onOpen={onOpen} />
      <i className='modal-scrollIntoView-hook' />
      </Wrapper>
    </>
  )
}

Projects.propTypes = {
  slide: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired
}

export default Projects;