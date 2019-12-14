import styled from 'styled-components';
import { portrait, bootstrap } from '../../../../utils/responsive';

const StyledModal = styled.div`
  position: absolute;
  width: 100%;
  left: 0px;
  top: 0;
  z-index: 50;
  .wrapper {
    .content-top, .content-bottom {
      border-radius: 0;
    }
  }
  .project-modal {
    display: flex;
    flex-direction: column;
    h5 {
      padding: 15px 0;
    }
    .address {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 8px 0;
      .btn {
        align-items: center;
        min-height: 50px;
        p {
          font-size: .7em;
        }
        span {
          transform: rotate(90deg);
          padding-right: 1px;
        }
      }
    }
  }
  .close-modal {
    position: sticky;
    top: 0;
    height: 0;
    display: flex;
    justify-content: flex-end;
    z-index: 50;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 25px;
      background: var(--grey);
      svg {
        cursor: pointer;
        color: var(--primary);
      }
    }
  }

  @media ${bootstrap.lg} {
    position: relative;
    .wrapper {
      height: 750px;
    }
  }
  @media ${bootstrap.sm} {
    .close-modal {
      top: 84px;
      span {
        height: 20px;
      }
    }
  }
  @media ${portrait.mobileL} {
    .close-modal {
      top: 77px;
    }
  }
  @media ${portrait.mobileM} {
    .close-modal {
      top: 69px;
    }
  }
`

export default StyledModal;