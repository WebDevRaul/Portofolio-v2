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
      width: calc(100vw / 10);
      height: calc(100vw / 10);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: var(--transition);
      ::before {
        content: '';
        position: absolute;
        width: calc(100vw / 10);
        height: calc(100vw / 10);
        border-radius: calc(100vw / 10);
        top: 10px;
        left: -10px;
        background: linear-gradient(135deg, rgba(120, 204, 109, .3) 0%, rgba(120, 204, 109, .01) 100%);
        transition: var(--transition);
      }
      img {
        border-radius: calc(100vw / 10);
        transition: var(--transition);
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
      .photo {
        width: 150px;
        height: 150px;
        ::before {
          width: 150px;
          height: 150px;
          border-radius: 150px;
        }
        img {
          border-radius: 150px;
        }
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
      .photo {
        width: calc(100vw / 4);
        height: calc(100vw / 4);
        ::before {
          width: calc(100vw / 4);
          height: calc(100vw / 4);
          border-radius: calc(100vw / 4);
        }
        img {
          border-radius: calc(100vw / 4);
        }
      }
    }
  }
  @media ${portrait.mobileL} {
    .profile {
      margin-top: 85px;
      .photo {
        width: calc(100vw / 3);
        height: calc(100vw / 3);
        ::before {
          width: calc(100vw / 3);
          height: calc(100vw / 3);
          border-radius: calc(100vw / 3);
        }
        img {
          border-radius: calc(100vw / 3);
        }
      }
    }
  }
  @media ${landscape.mobile} {
    .profile {
      .photo {
        top: 25px;
        left: 50%;
        transform: translate(-50%);
        width: calc(100vh / 4);
        height: calc(100vh / 4);
        ::before {
          width: calc(100vh / 4);
          height: calc(100vh / 4);
          border-radius: calc(100vh / 4);
        }
        img {
          border-radius: calc(100vh / 4);
        }
      }
    }
  }
  @media ${landscape.mobileM} {
    .profile {
      .photo {
        top: 10px;
      }
    }
  }
`

export default StyledProfile;