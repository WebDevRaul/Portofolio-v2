import styled from 'styled-components';
import { bootstrap, portrait } from '../../../utils/responsive';

const StyledAbout = styled.section`
  position: relative;
  .top, .bottom {
    width: 100%;
    height: 20px;
    display: block;
    background: var(--grey);
    border-radius: var(--border);
    position: sticky;
    z-index: 20;
  }
  .top {
    top: 0;
  }
  .bottom {
    bottom: 0;
  }
  .about {
    bottom: -12px;
    height: 82vh;
    width: 100%;
    padding: 0 10px 0 18px;
    background-color: var(--grey);
    border-radius: var(--border);
    backface-visibility: hidden;
    overflow: hidden;
    overflow-y: scroll;
    overflow: auto;
  }

  @media ${bootstrap.lg} {
    .about {
      height: 100%;
      overflow: unset;
      overflow-y: unset;
      padding: 0 50px;
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
    .about {
      padding: 0 25px;
    }
  }
  @media ${bootstrap.sm} {
    .about {
      padding: 0px;
    }
  }
`

export default StyledAbout;