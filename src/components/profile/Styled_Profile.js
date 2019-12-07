import styled from 'styled-components';
import { portrait, bootstrap } from '../../utils/responsive';

const StyledProfile = styled.section`
  width: 100%;
  .profile {
    height: calc(100vh - 100px);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: var(--grey);
    border-radius: var(--border);
    z-index: 10;
    max-width: 400px;
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
      position: relative;
      width: 135px;
      height: 135px;
      margin-bottom: 20px;
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
    }
    ul {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      li {
        margin: 0 5px;
        color: var(--darkWhite);
      }
    }
  }
  @media ${bootstrap.lg} {
    .profile {
      .photo {
        width: 140px;
        height: 140px;
        ::before {
          width: 140px;
          height: 140px;
          top: 10px;
          left: -10px;
        }
      }
      h3 {
        font-size: 2.2em;
      }
      ul {
        margin-bottom: 15px;
      }
    }
  }
  @media ${portrait.tablet} {
    .photo {
      width: 110px;
      height: 110px;
      ::before {
        width: 110px;
        height: 110px;
        top: 8px;
        left: -8px;
      }
    }
  }
  @media ${bootstrap.sm} {
    .profile {
      margin: 0 auto;
      .photo {
        width: 118px;
        height: 118px;
        ::before {
          width: 118px;
          height: 118px;
          top: 9px;
          left: -9px;
        }
      }
      ul {
        margin-bottom: 20px;
      }
    }
  }
  @media ${portrait.mobileL} {
    .profile {
      margin: 0 16px;
      .photo {
        margin-bottom: 30px;
        width: 100px;
        height: 100px;
        ::before {
          width: 100px;
          height: 100px;
          top: 7px;
          left: -7px;
        }
      }
      ul {
        margin-bottom: 30px;
      }
    }
  }
`

export default StyledProfile;