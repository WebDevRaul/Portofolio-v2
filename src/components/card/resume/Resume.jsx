import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import StyledResume from './Styled_Resume';

const Resume = ({ resume }) => {
  return (
    <StyledResume>
       <div className={classnames('resume', {'slideInRight': resume, 'slideOutRight': !resume})}>
         <i className='top' />
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequuntur officiis adipisci iure aperiam quibusdam omnis ipsum maiores magni incidunt.
         <i className='bottom' />
       </div>
    </StyledResume>
  )
}

Resume.propTypes = {
  resume: PropTypes.bool.isRequired
}

export default Resume;