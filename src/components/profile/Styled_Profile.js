import styled from 'styled-components';
import { portrait, bootstrap, landscape } from '../../utils/responsive';

const StyledProfile = styled.section`
  width: 100%;
  z-index: 20;
  display: flex;
  .profile {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: calc(100vh - 100px);
    width: 100%;
    border-radius: var(--border);
    background: var(--grey);
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
    z-index: 10;
    ::before {
      content: '';
      position: absolute;
      left: -15px;
      top: -15px;
      width: 100%;
      height: 100%;
      border-radius: var(--border);
      background: var(--grey);
      opacity: .5;
      z-index: -10;
    }
    .photo {
      width: calc(100vh / 5);
      height: calc(100vh / 5);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      border-radius: 50px;
      ::before {
        content: '';
        position: absolute;
        width: calc(100vh / 5);
        height: calc(100vh / 5);
        border-radius: calc(100vh / 5);
        top: 10px;
        left: -10px;
        background: var(--bgColor);
      }
      > div {
        height: calc(100vh / 5);
        height: calc(100vh / 5);
      }
      img {
        border-radius: calc(100vh / 5);
        object-position: top !important;
      }
    }
    h5 {
      color: var(--primary);
      font-size: 1.1em;
      transition: var(--transition);
    }
    ul {
      display: flex;
      justify-content: center;
      margin-bottom: 16px;
      transition: var(--transition);
      li {
        margin: 0 5px;
        color: var(--darkWhite);
      }
    }
  }
  @media ${bootstrap.lg}{
    .profile {
      height: calc(100vh - 50px);
      h3 {
        font-size: 2.2em;
      }
    }
  }
  @media ${bootstrap.sm}{
    .profile {
      height: calc(100vh - 100px);
      margin-top: 95px;
      ul, h3, h5 {
        margin-bottom: 12px;
      }
    }
  }
  @media ${portrait.mobileL} {
    .profile {
      margin-top: 85px;
    }
  }
  @media ${landscape.mobile} {
    .profile {
      .photo {
        top: 50px;
        left: 50%;
        transform: translate(-50%);
      }
    }
  }
  @media ${landscape.mobileM} {
    .profile {
      .photo {
        top: 20px;
      }
    }
  }
`

export default StyledProfile;