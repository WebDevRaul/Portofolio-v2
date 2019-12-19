import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import About from './about/About';
import Resume from './resume/Resume';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Modal from './projects/modal/Modal';
import Message from './contact/message/Message';
import Error from './contact/message/Error';

const Card = ({ about, resume, projects, contact }) => {
  const [state, setState] = useState({ modal: false, slideModal: false, data: {} });
  const [message, setMessage] = useState({ success: false, slideMessage: false, error: false });
  const [mobile, setMobile] = useState(false);
  const { modal, slideModal, data } = state;
  const { success, slideMessage, error } = message;

  // Check window CDM
  useEffect(() => {
    if(window.innerWidth < 992) setMobile(true);
    // eslint-disable-next-line
  },[])

  // Update SlideModal CDU
  useEffect(() => {
    // Modal
    if(!projects && slideModal && !mobile ) {
      setState({ ...state, slideModal: false });
      setTimeout(() => setState({ ...state, modal: false, data: {} }), 800);
    }
    // Message
    if(!contact && slideMessage && !mobile ) {
      setMessage({ ...message, slideMessage: false });
      setTimeout(() => setMessage({ ...state, success: false, error: false}), 800);
    }
    // eslint-disable-next-line
  },[projects, contact]);

  // Clear Modal data CDU
  useEffect(() => {
    // Modal
    if(!slideModal && modal && !mobile) setTimeout(() => setState({ modal: false, slideModal: false, data: {} }),800);
    // Message
    if(!slideMessage && ( message || error ) && !mobile) setTimeout(() => setMessage({ success: false, slideMessage: false, error: false }),800);
    // eslint-disable-next-line
  },[slideModal, slideMessage])

  const onOpenModal = data => {
    setState({ slideModal: true, modal: true, data });
    if(mobile) document.querySelector('.modal-scrollIntoView-hook').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const onCloseModal = () => {
    if(mobile) document.querySelector('.projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
    if(mobile) return setState({ ...state, slideModal: false, modal: false });
    setState({ ...state, slideModal: false });
  };

  const openMessage = ({ success }) => {
    if(success) return setMessage({ ...message, slideMessage: true, success: true });
    setMessage({ ...message, slideMessage: true, error: true });
  };
  const onCloseMessage = () => {
    setMessage({ ...message, slideMessage: false });
  };

  return (
    <div style={{ position: 'relative', marginTop: '10px',marginBottom: '20px', width: '100%' }}>
      <About slide={about} />
      <Resume slide={resume} />
      <Projects slide={projects} onOpen={onOpenModal} />
      <div className={classnames('no-height', {'height' : modal})}>
        { modal && <Modal { ...data } onClose={onCloseModal} slide={slideModal} /> }
      </div>
      <Contact slide={contact} openMessage={openMessage} />
      { success && <Message onClose={onCloseMessage} slide={slideMessage} /> }
      { error && <Error onClose={onCloseMessage} slide={slideMessage} /> }
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