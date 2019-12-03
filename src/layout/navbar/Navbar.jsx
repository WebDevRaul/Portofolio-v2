import React from 'react';
import PropTypes from 'prop-types';
import StyledNavbar from './Styled_Navbar';
import Li from './Li';

const Navbar = ({ state, setState }) => {
  const onClick = name => {
    // Find the active state
    const active = Object.entries(state).filter(([key, val]) => val !== false);
    // Flat array
    const [flattenedArr] = [].concat.apply([],active);
    // Return null if click on active state
    if(name === flattenedArr) return null;
    // Update new state
    setState({...state, [flattenedArr]: false, [name]: true });
  };

  const { about, resume, projects, contact } = state;
  
  return (
    <StyledNavbar>
      <ul>
        <Li text='about' icon='person' onClick={onClick} active={about} />
        <Li text='resume' icon='list_alt' onClick={onClick} active={resume} />
        <Li text='projects' icon='build' onClick={onClick} active={projects} />
        <Li text='contact' icon='recent_actors' onClick={onClick} active={contact} />
      </ul>
    </StyledNavbar>
  )
}

Navbar.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired
}

export default Navbar;