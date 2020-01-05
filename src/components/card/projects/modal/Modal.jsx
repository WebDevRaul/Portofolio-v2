import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../../common/utils/is_Empty';
import Wrapper from '../../wrapper/Wrapper';
import CloseIcon from '@material-ui/icons/Close';
import BackgroundImage from 'gatsby-background-image'
import Title from '../../../common/title/Title';
import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';
import CustomButton from '../../../common/button/Custom_Button';
import Logo from '../../../common/logo/Logo';
import * as Skills from '../../../../svg/bundle';

import StyledModal from './Styled_Modal';

const Modal = ({ slide, onClose, image, title, description, p, frontEnd, backEnd, address }) => {
  return (
    <StyledModal>
      <Wrapper slide={slide} isClass='wrapper-modal'>
        <div className='close-modal'>
          <span onClick={onClose}><CloseIcon /></span>
        </div>
        <div className='project-modal'>
          <a href={address} target='_blank' rel="noopener noreferrer">
            <BackgroundImage fluid={image}>
              <div className='background-container'/>
            </BackgroundImage>
          </a>
          <Title text={title} />
          <p className='description'>{description}</p>
          <p>{p}</p>
          <p className='mb-0'>Created with the help of :</p>
          <div className='skill'><Title text='Front-End :' /></div>
          <div className='skills'>
            {
              frontEnd.map(({ skill, text }, index) => {
                const Skill = Skills[skill];
                return <Logo key={index} logo={<Skill width='25px' height='25px' />} text={text} />
              })
            }
          </div>
          { !isEmpty(backEnd) && <div className='skill'><Title text='Backend :' /></div>}
          <div className='skills'>
            { !isEmpty(backEnd) && backEnd.map(({ skill, text }, index) => {
                const Skill = Skills[skill];
                return <Logo key={index} logo={<Skill width='25px' height='25px' />} text={text} />
              })
            }
          </div>
          <div className='address'>
            <a href={address} target='_blank' rel="noopener noreferrer">
              <CustomButton text='View Project' isLogo={<KeyboardCapslockIcon />} />
            </a>
          </div>
        </div>
        <>
        </>
      </Wrapper>
    </StyledModal>
  )
}

Modal.propTypes = {
  slide: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  frontEnd: PropTypes.arrayOf(PropTypes.object).isRequired,
  backEnd: PropTypes.arrayOf(PropTypes.object),
  address: PropTypes.string.isRequired
}

export default Modal;