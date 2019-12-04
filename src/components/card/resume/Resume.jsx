import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import StyledResume from './Styled_Resume';

const Resume = ({ resume }) => {
  return (
    <StyledResume>
       <div className={classnames('', {'slideInRight': resume, 'slideOutRight': !resume})}>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequuntur officiis adipisci iure aperiam quibusdam omnis ipsum maiores magni incidunt.
       </div>
    </StyledResume>
  )
}

Resume.propTypes = {
  resume: PropTypes.bool.isRequired
}

export default Resume;