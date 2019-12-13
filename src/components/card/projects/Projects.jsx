import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Title from '../../common/title/Title';
import Project from './project/Project';
import Wrapper from '../wrapper/Wrapper';
import Modal from './modal/Modal';

const Projects = ({ slide }) => {
  const [state, setState] = useState({ modal: false, slideModal: false, data: {} });
  const { modal, slideModal, data } = state;

  // Update SlideModal CDU
  useEffect(() => {
    if(!slide && slideModal) setState({ ...state, slideModal: false });
    // eslint-disable-next-line
  },[slide]);

  // Clear Modal data CDU
  useEffect(() => {
    if(!slideModal && modal) setTimeout(() => setState({ ...state, modal: false, data: {} }),1800);
    // eslint-disable-next-line
  },[slideModal])

  const onOpen = data => setState({ slideModal: true, modal: true, data });
  const onClose = () => setState({ ...state, slideModal: false });

  return (
    <>
      <Wrapper slide={slide} isClass='tree'>
        <Title text='Recent Projects' />
        <Project onOpen={onOpen} />
      </Wrapper>
      { modal && <Modal { ...data } onClose={onClose} slide={slideModal} /> }
    </>
  )
}

Projects.propTypes = {
  slide: PropTypes.bool.isRequired
}

export default Projects;