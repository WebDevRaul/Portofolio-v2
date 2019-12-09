import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Title from '../../common/title/Title';

import StyledProjects from './Styled_Projects';

const Projects = ({ projects }) => {
  return (
    <StyledProjects>
       <div className={classnames('projects', {'slideInRight': projects, 'slideOutRight': !projects})}>
        <i className='top' />
        <Title text='Recent Projects' />
        <i className='bottom' />
       </div>
    </StyledProjects>
  )
}

Projects.propTypes = {
  projects: PropTypes.bool.isRequired
}

export default Projects;