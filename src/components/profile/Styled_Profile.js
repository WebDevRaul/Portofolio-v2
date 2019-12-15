import styled from 'styled-components';
import { portrait, bootstrap } from '../../utils/responsive';

const StyledProfile = styled.section`
  width: 100%;
  z-index: 20;
  .profile {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: var(--grey);
    border-radius: var(--border);
    z-index: 10;
    height: calc(100vh - 100px);
    width: 100%;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
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
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 135px;
      height: 135px;
      margin-bottom: 40px;
      ::before {
        content: '';
        position: absolute;
        width: 135px;
        height: 135px;
        border-radius: 75px;
        top: 10px;
        left: -10px;
        background: linear-gradient(135deg, rgba(120, 204, 109, .3) 0%, rgba(120, 204, 109, .01) 100%);
      }
      img {
        border-radius: 75px;
      }
    }
    h5 {
      color: var(--primary);
      font-size: 1.1em;
      margin-bottom: 30px;
    }
    h3 {
      margin-bottom: 30px;
    }
    ul {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      li {
        margin: 0 5px;
        color: var(--darkWhite);
      }
    }
  }
  @media ${bootstrap.lg} {
    .profile {
      h3 {
        font-size: 2.2em;
      }
      ul {
        margin-bottom: 16px;
      }
    }
  }
  @media ${bootstrap.sm} {
    .profile {
      margin-top: 95px;
      .photo {
        width: 118px;
        height: 118px;
        ::before {
          width: 118px;
          height: 118px;
        }
      }
    }
  }
  @media ${portrait.mobileL} {
    .profile {
      .photo {
        margin-bottom: 30px;
        width: 110px;
        height: 110px;
        ::before {
          width: 110px;
          height: 110px;
        }
      }
      ul {
        margin-bottom: 30px;
      }
    }
  }
  @media ${portrait.mobileM} {
    .profile {
      margin-top: 85px;
      .photo, ul {
        margin-bottom: 35px;
      }
    }
  }
`

export default StyledProfile;