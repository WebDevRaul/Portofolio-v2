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
  const { modal, slideModal, data } = state;

  // Update SlideModal CDU
  useEffect(() => {
    // if(!projects && slideModal) setState({ ...state, slideModal: false });
    // eslint-disable-next-line
  },[projects]);

  // Clear Modal data CDU
  useEffect(() => {
    // if(!slideModal && modal) setTimeout(() => setState({ ...state, modal: false, data: {} }),1800);
    // setState({ ...state, modal: false, data: {} })
    // eslint-disable-next-line
  },[slideModal])

  const onOpen = data => setState({ slideModal: true, modal: true, data });
  const onClose = () => setState({ ...state, slideModal: false, modal: false });

  return (
    <div className='ml-3 mr-3 ml-sm-0 mr-sm-0' style={{ position: 'relative', margin: '10px 0' }}>
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