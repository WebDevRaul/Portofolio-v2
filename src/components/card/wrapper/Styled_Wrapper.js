import styled from 'styled-components';
import { bootstrap, portrait } from '../../../utils/responsive';

const StyledWrapper = styled.section`
  position: relative;
  .wrapper {
    position: absolute;
    top: 0;
    bottom: -12px;
    height: 82vh;
    width: 100%;
    padding: 0 10px 0 18px;
    background-color: var(--grey);
    border-radius: var(--border);
    backface-visibility: hidden;
    overflow: hidden;
    overflow-y: scroll;
    .content-top, .content-bottom {
      width: 100%;
      height: 25px;
      display: block;
      background: var(--grey);
      position: sticky;
      z-index: 20;
    }
    .content-top {
      top: 0;
    }
    .content-bottom {
      bottom: 0;
    }
  }
  .scroll {
    overflow: hidden;
  }
  .zIndex {
    z-index: 10
  }
  @media ${bootstrap.lg} {
    .about-wrapper {
      border-top-left-radius: var(--border) !important;
      border-top-right-radius: var(--border) !important;
    }
    .contact-wrapper {
      border-bottom-left-radius: var(--border) !important;
      border-bottom-right-radius: var(--border) !important;
    }
    .wrapper {
      position: relative;
      height: 100%;
      overflow: unset;
      overflow-y: unset;
      padding: 0 50px;
      border-radius: unset;
    }
    .slideInRight, .slideOutRight {
      animation: unset;
      transform: translateX(0);
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
    }
  }
  @media ${portrait.tablet} {
    .wrapper {
      padding: 0 25px;
    }
  }
  @media ${bootstrap.sm} {
    .wrapper {
      padding: 0px;
      .content-top {
        border-radius: var(--broder);
      }
      .content-bottom {
        display: none;
      }
    }
  }
`

export default StyledWrapper;