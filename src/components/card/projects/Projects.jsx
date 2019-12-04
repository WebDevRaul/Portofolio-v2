import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import StyledProjects from './Styled_Projects';

const Projects = ({ projects }) => {
  return (
    <StyledProjects>
       <div className={classnames('', {'slideInRight': projects, 'slideOutRight': !projects})}>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem temporibus corrupti in architecto. Ad enim nobis perferendis sapiente et ipsum, eius labore dolorum at architecto? Magnam voluptas soluta possimus incidunt.
       </div>
    </StyledProjects>
  )
}

Projects.propTypes = {
  projects: PropTypes.bool.isRequired
}

export default Projects;