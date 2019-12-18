import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import About from './about/About';
import Resume from './resume/Resume';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Modal from './projects/modal/Modal';

const Card = ({ about, resume, projects, contact }) => {
  const [state, setState] = useState({ modal: false, slideModal: false, data: {} });
  const [mobile, setMobile] = useState(false);
  const { modal, slideModal, data } = state;

  // Check window CDM
  useEffect(() => {
    if(window.innerWidth < 992) setMobile(true);
    // eslint-disable-next-line
  },[])

  // Update SlideModal CDU
  useEffect(() => {
    if(!projects && slideModal && !mobile ) {
      setState({ ...state, slideModal: false });
      setTimeout(() => setState({ ...state, modal: false, data: {} }), 800);
    }
    // eslint-disable-next-line
  },[projects]);

  // Clear Modal data CDU
  useEffect(() => {
    if(!slideModal && modal && !mobile) setTimeout(() => setState({ modal: false, slideModal: false, data: {} }),800);
    // eslint-disable-next-line
  },[slideModal])

  const onOpen = data => {
    setState({ slideModal: true, modal: true, data });
    if(mobile) document.querySelector('.modal-scrollIntoView-hook').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  const onClose = () => {
    if(mobile) document.querySelector('.projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
    if(mobile) return setState({ ...state, slideModal: false, modal: false });
    setState({ ...state, slideModal: false });
  }

  return (
    <div style={{ position: 'relative', marginTop: '10px',marginBottom: '20px', width: '100%' }}>
      <About slide={about} />
      <Resume slide={resume} />
      <Projects slide={projects} onOpen={onOpen} />
      <div className={classnames('no-height', {'height' : modal})}>
        { modal && <Modal { ...data } onClose={onClose} slide={slideModal} /> }
      </div>
      <Contact slide={contact} />
    </div>
  )
}

Card.propTypes = {
  about: PropTypes.bool.isRequired,
  resume: PropTypes.bool.isRequired,
  projects: PropTypes.bool.isRequired,
  contact: PropTypes.bool.isRequired
}

export default Card;