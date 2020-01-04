import React from 'react';
import PropTypes from 'prop-types';
import Mode from './Mode';
import StyledNavbar from './Styled_Navbar';
import Li from './Li';
import PersonOutline from '@material-ui/icons/PersonOutline';
import ListAlt from '@material-ui/icons/ListAlt';
import Build from '@material-ui/icons/Build';
import RecentActors from '@material-ui/icons/RecentActors';

const Navbar = ({ state, setState }) => {

  const onClick = name => {
    document.querySelector(`.${name}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
    
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
      <div style={{ position: 'relative' }}>
        <ul>
          <Li text='about' icon={<PersonOutline />} onClick={onClick} active={about} />
          <Li text='resume' icon={<ListAlt />} onClick={onClick} active={resume} />
          <Li text='projects' icon={<Build />} onClick={onClick} active={projects} />
          <Li text='contact' icon={<RecentActors />} onClick={onClick} active={contact} />
          <Mode />
        </ul>
      </div>
    </StyledNavbar>
  )
}

Navbar.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired
}

export default Navbar;