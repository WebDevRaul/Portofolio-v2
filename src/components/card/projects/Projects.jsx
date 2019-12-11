import React from 'react';
import Title from '../../common/title/Title';
import Project from './project/Project';

const Projects = ({ close }) => {
  return (
    <>
      <Title text='Recent Projects' />
      <Project close={close} />
    </>
  )
}

export default Projects;