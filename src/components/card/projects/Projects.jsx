import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Title from '../../common/title/Title';

import StyledProjects from './Styled_Projects';
import Project from './project/Project';

const Projects = ({ projects }) => {
  const [show, setShow] = useState(false);
  return (
    <StyledProjects>
       <div className={classnames('projects', {'slideInRight zIndex': projects, 'slideOutRight': !projects, 'scroll': show})}>
        <i className='top' />
        <Title text='Recent Projects' />
        <Project show={show} setShow={setShow} />
        <i className='bottom' />
       </div>
    </StyledProjects>
  )
}

Projects.propTypes = {
  projects: PropTypes.bool.isRequired
}

export default Projects;